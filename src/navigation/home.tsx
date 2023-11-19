import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Text } from "react-native";
import { Entypo, MaterialCommunityIcons, SimpleLineIcons, FontAwesome, Ionicons } from '@expo/vector-icons';

import { global } from "../styles";

import HomeStack from "./BottomTab/home";
import FoodStack from "./BottomTab/food";
import { LoadingContextProvider } from "../context/LoadingContext";

const Tab = createBottomTabNavigator();

interface IProps {
    navigation: any,
    route: any,
}
const HomeNavigation = (props: IProps) => {

    return (
        <LoadingContextProvider>
            <Tab.Navigator
                initialRouteName='Dashboard'
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        paddingBottom: 5
                    }
                }}
            >
                <Tab.Screen
                    name='HomeStack'
                    component={HomeStack}
                    options={{
                        tabBarLabel: '',
                        tabBarIcon: ({ focused }) => (
                            <Entypo
                                name="home"
                                style={[global.tabIcon, focused && global.tabActive]}
                            />
                        ),
                    }}
                />

                <Tab.Screen
                    name='FoodStack'
                    component={FoodStack}
                    options={{
                        tabBarLabel: '',
                        tabBarIcon: ({ focused }) => (
                            <MaterialCommunityIcons
                                name="silverware-fork-knife"
                                style={[global.tabIcon, focused && global.tabActive]}
                            />
                        ),
                    }}
                />

                <Tab.Screen
                    name='CalendarStack'
                    component={HomeStack}
                    options={{
                        tabBarLabel: '',
                        tabBarIcon: ({ focused }) => (
                            <MaterialCommunityIcons
                                name="calendar-month-outline"
                                style={[global.tabIcon, focused && global.tabActive]}
                            />
                        ),
                    }}
                />

                <Tab.Screen
                    name='PinStack'
                    component={HomeStack}
                    options={{
                        tabBarLabel: '',
                        tabBarIcon: ({ focused }) => (
                            <Ionicons
                                name="location-sharp"
                                style={[global.tabIcon, focused && global.tabActive]}
                            />
                        ),
                    }}
                />

                <Tab.Screen
                    name='UserStack'
                    component={HomeStack}
                    options={{
                        tabBarLabel: '',
                        tabBarIcon: ({ focused }) => (
                            <FontAwesome
                                name="user"
                                style={[global.tabIcon, focused && global.tabActive]}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </LoadingContextProvider>
    )
}

export default HomeNavigation;