import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Landing from "../auth/landing";
import { header } from "../styles";
import WelcomeHome from "../screens/Welcome/welcome_home";
import { useStateContext } from "../context/ContextProvider";
import Loading from "../components/Loading/loading";
import authService from "../services/auth.service";
import ViewInvite from "../screens/Welcome/view_invite";
import GoBack from "../components/GoBack/go_back";

const Stack = createStackNavigator();

interface IProps {
    navigation: any,
    route: any,
}
const WelcomeNavigation = (props: IProps) => {

    const [loading, setLoading] = useState(true);

    const { user, token, home, setUser, setHome } = useStateContext();
    const hasName = true; //user?.first_name && user?.last_name;

    const SendHome = () => {
        if (!home || !hasName)
            return;
        props.navigation?.navigate('HomeNav');
    }

    const GetUser = async () => {
        authService.GetUser().then(
            (res) => {
                setUser(res.data);
                setLoading(false);
            },
            (err) => {
                console.log('user error', err);
            }
        );
    }

    const GetHome = async () => {
        authService.GetHome().then(
            (res) => {
                if (res.status !== 403) {
                    setHome(res.data);
                }
                else {
                    console.log('test1', res.status);
                }
            },
            (err) => {
                console.log('home error', err);
            }
        );
    }

    useEffect(() => {
        GetUser();
        GetHome();
    }, []);

    useEffect(() => {
        SendHome();
    }, [user, home])

    if (loading)
        return <Loading />;

    return (
        <Stack.Navigator
            initialRouteName='WelcomeHome'
            screenOptions={header}
        >
            <Stack.Screen
                name='WelcomeHome'
                component={WelcomeHome}
                options={{
                    title: "Welcome Home"
                }}
            />

            <Stack.Screen
                name='ViewInvite'
                component={ViewInvite}
                options={{
                    title: "Your Invite Code",
                }}
            />
        </Stack.Navigator>
    )
}

export default WelcomeNavigation;