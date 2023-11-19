import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { header } from "../../styles";
import Home from "../../screens/Home/home";
import Food from "../../screens/Food/food";
import ShoppingList from "../../screens/Food/list";
import { ShoppingContextProvider } from "../../context/ShoppingContext";

const Stack = createStackNavigator();

interface IProps {
    navigation: any,
    route: any,
}
const FoodStack = (props: IProps) => {
    return (
        <ShoppingContextProvider>
            <Stack.Navigator
                initialRouteName='Food'
                screenOptions={header}
            >
                <Stack.Screen
                    name='Food'
                    component={Food}
                    options={{
                        title: "Food"
                    }}
                />
                <Stack.Screen
                    name='ShoppingList'
                    component={ShoppingList}
                    options={{
                        title: "Shopping List"
                    }}
                />
            </Stack.Navigator>
        </ShoppingContextProvider>
    )
}

export default FoodStack;