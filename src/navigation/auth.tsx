import React, { useContext, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Landing from "../auth/landing";
import Login from "../auth/login";
import Register from "../auth/register";
import { useStateContext } from '../context/ContextProvider';

const Stack = createStackNavigator();

interface IProps {
    navigation: any,
    route: any,
}
const AuthNavigation = (props: IProps) => {

    const { user, token } = useStateContext();
    const isAuthenticated = token && token !== "";

    const SendHome = () => {
        if (!isAuthenticated)
            return;
        props.navigation?.navigate('WelcomeNav');
    }

    useEffect(() => {
        SendHome();
    });

    useEffect(() => {
        props.navigation.addListener('focus', () => {
            //SendHome();
        });
    }, []);

    return (
        <Stack.Navigator
            initialRouteName='Landing'
            screenOptions={{ headerBackTitle: "Back" }}
        >
            <Stack.Screen
                name='Landing'
                component={Landing}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Login'
                component={Login}
            />
            <Stack.Screen
                name='Register'
                component={Register}
            />
        </Stack.Navigator>
    )
}

export default AuthNavigation;