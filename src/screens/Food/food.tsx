import React, { useCallback, useEffect, useState } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import Container from "../../components/Container/container";
import SliderOption from "../../components/SliderOption/slider_option";

import { Entypo } from '@expo/vector-icons';

import { colours, global } from "../../styles";
import { styles } from "./styles";
import { useStateContext } from "../../context/ContextProvider";
import NewListModal from "./Modals/new_list";
import Loading from "../../components/Loading/loading";
import FoodOption from "../../components/FoodOption/food_option";
import { useShoppingListContext } from "../../context/ShoppingContext";
import { useFocusEffect } from "@react-navigation/native";

interface IProps {
    navigation: any,
}
const Food = (props: IProps) => {

    const { lists: contextLists, RefreshData } = useShoppingListContext();
    const { home } = useStateContext();

    const [lists, setLists] = useState([]);
    const [loading, setLoading] = useState(false);
    const [option, setOption] = useState<string>("shopping");
    const [listModal, setListModal] = useState<string>("");

    const headerTexts = {
        'shopping': 'Shopping List',
        'planner': 'Meal Planner',
    }

    const NewList = (type: string) => {
        setListModal(type);
    }

    useEffect(() => {
        const loadedLists = [];
        for (const idx in contextLists) {
            const list = contextLists[idx];
            loadedLists.push(list);
        }
        setLists(loadedLists);
    }, [contextLists]);

    useFocusEffect(
        useCallback(() => {
            RefreshData();
        }, [])
    );

    const userLists = lists.filter(item => item.user_id);
    const homeLists = lists.filter(item => item.home_id);

    const ListPressed = (list: any) => {
        props.navigation.navigate('ShoppingList', {
            list: list,
        });
    }

    if (loading)
        return <Loading />;

    return (
        <Container>

            <NewListModal
                navigation={props.navigation}
                type={listModal}
                setType={setListModal}
            />

            <View style={styles.header}>
                <Text style={[global.h1, { color: 'white' }]}>
                    {headerTexts[option]}
                </Text>
            </View>

            <View style={[styles.select, global.shadow]}>
                <SliderOption
                    type="shopping"
                    active={option}
                    setActive={setOption}
                />

                <SliderOption
                    type="planner"
                    active={option}
                    setActive={setOption}
                />
            </View>

            <ScrollView style={global.container}>

                {option === 'shopping' &&
                    <View>
                        <View style={[global.horizontal, styles.title]}>
                            <Text style={global.h3}>Your Lists</Text>
                            <Pressable onPress={() => NewList('user')}>
                                <Entypo name="squared-plus" size={32} color={colours.pink} />
                            </Pressable>
                        </View>

                        {userLists.length < 1 &&
                            <Text style={global.h4}>
                                No lists yet, create one!
                            </Text>
                        }

                        {userLists.map(function (val, idx) {

                            const length = 0;

                            return (
                                <FoodOption
                                    key={idx}
                                    id={val.id}
                                    name={val.name}
                                    category={val.category}
                                    length={length}
                                    onPress={() => ListPressed(val)}
                                />
                            )
                        })}

                        <View style={[global.horizontal, styles.title, { marginTop: 40 }]}>
                            <Text style={global.h3}>{home.name} Lists</Text>
                            <Pressable onPress={() => NewList('home')}>
                                <Entypo name="squared-plus" size={32} color={colours.pink} />
                            </Pressable>
                        </View>

                        {homeLists.length < 1 &&
                            <Text style={global.h4}>
                                No lists yet, create one!
                            </Text>
                        }

                        {homeLists.map(function (val, idx) {

                            const length = 0; // lengths[val.id]

                            return (
                                <FoodOption
                                    key={idx}
                                    id={val.id}
                                    name={val.name}
                                    category={val.category}
                                    length={length}
                                    onPress={() => ListPressed(val)}
                                />
                            )
                        })}
                    </View>
                }

                {option === 'planner' &&
                    <View>
                        <View style={[global.horizontal, styles.title]}>
                            <Text style={global.h3}>Your Planners</Text>
                            <Pressable>
                                <Entypo name="squared-plus" size={32} color={colours.pink} />
                            </Pressable>
                        </View>

                        <Text style={global.h4}>
                            No planners yet, create one!
                        </Text>

                        <View style={[global.horizontal, styles.title, { marginTop: 40 }]}>
                            <Text style={global.h3}>{home.name} Planners</Text>
                            <Pressable>
                                <Entypo name="squared-plus" size={32} color={colours.pink} />
                            </Pressable>
                        </View>

                        <Text style={global.h4}>
                            No planners yet, create one!
                        </Text>
                    </View>
                }

            </ScrollView>
        </Container>
    );
}

export default Food;