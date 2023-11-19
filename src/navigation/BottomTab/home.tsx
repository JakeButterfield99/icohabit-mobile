import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { header } from "../../styles";
import Home from "../../screens/Home/home";
import HelpButton from "../../components/HelpButton/help_button";
import ManageHome from "../../screens/Home/manage";

const Stack = createStackNavigator();

interface IProps {
    navigation: any,
    route: any,
}
const HomeStack = (props: IProps) => {
    return (
        <Stack.Navigator
            initialRouteName='Dashboard'
            screenOptions={header}
        >
            <Stack.Screen
                name='Dashboard'
                component={Home}
                options={{
                    title: "Dashboard",
                    headerRight: () => (
                        <HelpButton navigation={props.navigation} />
                    ),
                }}
            />

            <Stack.Screen
                name="ManageHome"
                component={ManageHome}
            />
        </Stack.Navigator>
    )
}

export default HomeStack;