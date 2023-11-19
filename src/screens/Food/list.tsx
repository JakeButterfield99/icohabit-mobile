import React, { useCallback, useEffect, useState } from 'react'
import { View, Text, ScrollView, Pressable, TouchableWithoutFeedback } from 'react-native';
import foodService from '../../services/food.service';

import { ListItem, List, ListEntry, ListAction } from '../../types';

import Container from '../../components/Container/container'
import GoBack from '../../components/GoBack/go_back';
import Loading from '../../components/Loading/loading';

import { Entypo } from '@expo/vector-icons';

import { styles } from './styles';
import { global } from "../../styles";
import { LIST_ICONS } from '../../icons';
import InputButton from '../../components/InputButton/input_button';
import ShoppingListItem from '../../components/ShoppingListItem/shopping_list_item';
import { useFocusEffect } from '@react-navigation/native';
import { useShoppingListContext } from '../../context/ShoppingContext';

interface IProps {
    navigation: any,
    route: any,
}
const ShoppingList = (props: IProps) => {

    const list: List = props.route.params.list;
    const { items, itemsByName, lists, setLists } = useShoppingListContext();

    const [loading, setLoading] = useState(true);

    const [itemCategories, setItemCategories] = useState<{ [category: string]: ListEntry[] }>({});

    const [addItem, setAddItem] = useState(false);
    const [itemInput, setItemInput] = useState("");

    const ProcessListData = (entries: { [item_id: number]: ListEntry }) => {
        const cats = {};

        for (const item_id in entries) {
            const val = entries[item_id];
            const item: ListItem = items[val.item_id];

            const i: ListEntry = val;
            i.item = item;

            const c = item.category;

            if (c in cats) {
                cats[c].push(i);
                continue;
            }

            cats[c] = [i];
        }

        setItemCategories(cats);
        setLoading(false);
    }

    const GetItems = () => {
        if (!list.entries)
            list.entries = {};

        ProcessListData(list.entries);
    }

    useFocusEffect(
        useCallback(() => {
            GetItems();
        }, [])
    );

    useEffect(() => {
        props.navigation.setOptions({
            title: list.name,
            headerLeft: () => (<GoBack navigation={props.navigation} />)
        })
    }, []);

    const PressAddItem = () => {
        setAddItem(true);
    }

    const CreateItem = (name: string) => {
        return new Promise((resolve, reject) => {
            foodService.CreateItem(name).then((res) => {
                if (res.status !== 201)
                    reject();

                resolve(res.data.item_id);
            });
        })
    }

    const AddItemById = (item_id: number) => {
        foodService.AddItem(
            item_id,
            list.id,
        ).then((res) => {
            if (res.status !== 201) return;
            GetItems();
        });
    }

    const AddItem = () => {
        const item = itemInput.toLowerCase();
        setItemInput("");

        if (!item || item === "") return;

        // Items exists in registry
        if (itemsByName.hasOwnProperty(item)) {
            AddItemById(itemsByName[item]);
        }
        else {
            CreateItem(item).then((item_id: number) => {
                AddItemById(item_id);
            })
        }
    }

    if (loading)
        return <Loading />;

    return (
        <Container>
            <View style={styles.header}>
                {LIST_ICONS[list.category]}
                <Text style={[global.h2, { color: 'white' }]}>
                    {list.name}
                </Text>
            </View>

            <View style={global.container}>

                {addItem ?
                    <InputButton
                        label='Add Item'
                        icon='plus'
                        button='Add'
                        value={itemInput}
                        placeholder='e.g. Tortilla Chips'
                        onChangeText={(text) => setItemInput(text)}
                        onPress={AddItem}
                    />
                    :
                    <Pressable style={[styles.add_item, global.shadow]} onPress={PressAddItem}>
                        <Entypo name="plus" style={styles.add_item_icon} />
                        <Text style={styles.add_item_text}>
                            Add Item
                        </Text>
                    </Pressable>
                }

                <TouchableWithoutFeedback onPressIn={() => setAddItem(false)}>
                    <ScrollView>

                        {Object.keys(itemCategories).sort((a, b) => a.localeCompare(b)).map(function (val, idx) {

                            const entries = itemCategories[val];

                            return (
                                <View key={idx} style={styles.category}>
                                    <Text style={[global.h3, { marginBottom: 5 }]}>{val}</Text>

                                    {entries.map(function (val, iIdx) {
                                        return (
                                            <ShoppingListItem
                                                key={iIdx}
                                                list_id={list.id}
                                                entry={val}
                                                onUpdate={GetItems}
                                            />
                                        )
                                    })}

                                </View>
                            );
                        })}

                    </ScrollView>
                </TouchableWithoutFeedback>


            </View>
        </Container>
    )
}

export default ShoppingList;