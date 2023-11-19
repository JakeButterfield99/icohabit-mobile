import authAxios from "../axios";
import { List, ListEntry, ListItem, ListOperation } from "../types";
import storageService from "./storage.service";

const CreateList = (
    name: string,
    type: string,
) => {
    const priv = type === 'user' ? 1 : 0;

    return authAxios.post('shopping/list/create', {
        name: name,
        category: 'Groceries',
        private: priv,
    });
}

const GetItems = () => {
    return authAxios.get('shopping/item/get');
}

const CreateItem = (
    name: string,
) => {
    return authAxios.post('shopping/item/create', {
        name: name,
        category: "Other",
        visible: 1,
    })
}

const AddItem = (
    item_id: number,
    list_id: number,
) => {
    return authAxios.post('shopping/list/add', {
        item_id: item_id,
        list_id: list_id,
    })
}

const RemoveItem = (
    item_id: number,
    list_id: number,
) => {
    return authAxios.delete('shopping/list/remove', {
        data: {
            item_id: item_id,
            list_id: list_id,
        }
    })
}

const PlusItem = (
    item_id: number,
    list_id: number,
) => {
    return authAxios.patch('shopping/list/plus', {
        item_id: item_id,
        list_id: list_id,
    })
}

const MinusItem = (
    item_id: number,
    list_id: number,
) => {
    return authAxios.patch('shopping/list/minus', {
        item_id: item_id,
        list_id: list_id,
    })
}

const CheckItem = (
    item_id: number,
    list_id: number,
) => {
    return authAxios.patch('shopping/list/check', {
        item_id: item_id,
        list_id: list_id,
    })
}

/*
    Local
*/

const SaveLists = async (
    lists: { [list_id: number]: List },
) => {
    return storageService.StoreData(
        'shopping_lists',
        JSON.stringify(lists)
    );
}

const LoadLists = async () => {
    return storageService.GetData(
        'shopping_lists'
    );
}

const SaveItems = async (
    items: { [item_id: number]: ListItem },
) => {
    return storageService.StoreData(
        'list_items',
        JSON.stringify(items)
    );
}

const LoadItems = async () => {
    return storageService.GetData(
        'list_items'
    );
}

const SaveEntries = (
    entries: { [list_id: number]: ListEntry[] }
) => {
    return storageService.StoreData(
        'list_entries',
        JSON.stringify(entries)
    )
}

const LoadEntries = () => {
    return storageService.GetData(
        'list_entries'
    );
}

/*
    Server
*/

const CreateAction = (
    list_id: number,
    operation: ListOperation,
    item_id?: number,
    item_name?: string
) => {
    return authAxios.post(`list/action/create`, {
        'list_id': list_id,
        'operation': operation,
        'item_id': item_id,
        'item_name': item_name,
    });
}

const GetActions = (
    last_refresh: Date,
) => {
    return authAxios.get(`shopping/list/action/get/${last_refresh.toISOString()}`);
}

const GetListActions = (
    list_id: number,
) => {
    return authAxios.get(`shopping/list/${list_id}/actions`);
}

const RefreshLists = (lastRefresh: Date) => {
    return authAxios.get(`shopping/list/get/${lastRefresh.toISOString()}`);
}

const RefreshItems = (lastRefresh: Date) => {
    return authAxios.get(`shopping/item/get/${lastRefresh.toISOString()}`);
}

export default {
    CreateList,
    GetItems,
    CreateItem,
    AddItem,
    RemoveItem,
    PlusItem,
    MinusItem,
    CheckItem,

    // New
    SaveLists, LoadLists,
    SaveItems, LoadItems,
    SaveEntries, LoadEntries,

    GetActions,
    GetListActions,
    CreateAction,

    RefreshLists,
    RefreshItems,
}