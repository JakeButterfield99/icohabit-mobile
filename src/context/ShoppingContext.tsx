import { useFocusEffect } from "@react-navigation/native";
import React, { createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react";
import foodService from "../services/food.service";
import { List, ListEntry, ListItem, ListAction, ListOperation } from "../types";
import { AddItemToList } from "./actions/shopping";
import { useLoadingContext } from "./LoadingContext";

interface ContextInterface {
    lists: { [list_id: number]: List },
    setLists: Function,

    items: { [item_id: number]: ListItem },
    itemsByName: { [item_name: string]: number },
    setItems: Function,

    RefreshData: Function,
}

const DefaultContext = {
    lists: {}, setLists: () => { },
    items: {}, itemsByName: {}, setItems: () => { },
    RefreshData: () => { }
}

const ShoppingContext = createContext<ContextInterface>(DefaultContext);

interface IProps {
    children?: ReactNode,
}
export const ShoppingContextProvider = ({ children }: IProps) => {

    const loadingContext = useLoadingContext();

    const [lists, setLists] = useState(undefined);
    const [items, setItems] = useState(undefined);
    const [itemsByName, setItemsByName] = useState(undefined);

    const [actionRefresh, setActionRefresh] = useState(loadingContext.LoadingData['actions']);
    const [listsRefreshed, setListsRefreshed] = useState(false);
    const [itemsRefreshed, setItemsRefreshed] = useState(false);

    const LoadLists = async () => {
        return new Promise(async (resolve, reject) => {
            await foodService.LoadLists().then(res => {
                if (!res) {
                    setLists({});
                    //resolve({});
                    return;
                };
                setLists(JSON.parse(res));
                resolve(JSON.parse(res));
            });
        });
    }

    const LoadItemNames = async (items) => {
        const names = {}
        for (const idx in items) {
            const item = items[idx];
            const name = item.name.toLowerCase();
            names[name] = idx;
        }
        setItemsByName(names);
    }

    const LoadItems = async () => {
        return new Promise(async (resolve, reject) => {
            await foodService.LoadItems().then(res => {
                if (!res) {
                    setItems({});
                    resolve({});
                    return;
                };

                const data = JSON.parse(res);
                LoadItemNames(data);
                setItems(data);
                resolve(data);
            });
        });
    }

    const ProcessAction = (
        newLists: { [list_id: number]: List },
        action: ListAction
    ) => {
        const list: List = lists[action.list_id];
        const item: ListItem = items[action.item_id];

        // to do: something if we don't have item yet?
        if (!item) {
            console.log('ProcessAction: No Item')
            return;
        }

        // to do: check if user_id is self, ignore.

        console.log('processing action', action.operation)

        switch (action.operation) {
            case ListOperation.ADD_ITEM:
                const l = AddItemToList(list, item);
                console.log('added item', l)
                newLists[list.id] = l;
                break;
            default:
                console.log('unknown action', action.operation);
                break;
        }

        return newLists;
    }

    const RefreshActions = async () => {

        let lastRefresh = actionRefresh;

        if (!lastRefresh)
            lastRefresh = new Date(0);
        else
            lastRefresh = new Date(lastRefresh);

        let newLists = { ...lists };

        foodService.GetActions(lastRefresh).then((res) => {
            const actions: ListAction[] = res.data;
            actions.map((action: ListAction) => {
                newLists = ProcessAction(newLists, action);
            });

            setLists(newLists);
            foodService.SaveLists(newLists);
            loadingContext.SaveData('actions');
            setActionRefresh(new Date);
        })
            .catch(err => console.log('err', err));
    }

    const RefreshLists = async (rLists) => {
        let lastRefresh = loadingContext.LoadingData['lists'];

        if (!lastRefresh)
            lastRefresh = new Date(0);
        else
            lastRefresh = new Date(lastRefresh);

        foodService.RefreshLists(lastRefresh).then((res) => {
            const newLists = { ...rLists };
            res.data.lists.map((list: List) => {
                newLists[list.id] = list;
            });

            setLists(newLists);
            foodService.SaveLists(newLists);
            loadingContext.SaveData('lists');
            setListsRefreshed(true);
        }).catch(() => { });
    }

    const RefreshItems = async (rItems) => {
        let lastRefresh = loadingContext.LoadingData['items'];

        if (!lastRefresh)
            lastRefresh = new Date(0);
        else
            lastRefresh = new Date(lastRefresh);

        foodService.RefreshItems(lastRefresh).then((res) => {
            const newItems = { ...rItems };
            res.data.map((item: ListItem) => {
                newItems[item.id] = item;
            });

            setItems(newItems);
            LoadItemNames(newItems);
            foodService.SaveItems(newItems);
            loadingContext.SaveData('items');
            setItemsRefreshed(true);
        }).catch(() => { });
    }

    // On Load
    const LoadShopping = async () => {
        setListsRefreshed(false)
        setItemsRefreshed(false);

        let rList = lists;
        let rItem = items;

        if (!rList)
            rList = await LoadLists();

        if (!rItem)
            rItem = await LoadItems();

        RefreshLists(rList);
        RefreshItems(rItem);
    }

    useEffect(() => {
        if (itemsRefreshed && listsRefreshed)
            RefreshActions();
    }, [itemsRefreshed, listsRefreshed])

    // On Focus
    const RefreshData = () => {
        LoadShopping();
    }

    const context = {
        lists, setLists,
        items, itemsByName, setItems,
        RefreshData
    }

    return (
        <ShoppingContext.Provider value={context}>
            {children}
        </ShoppingContext.Provider>
    );
}

export const useShoppingListContext = () => useContext(ShoppingContext);