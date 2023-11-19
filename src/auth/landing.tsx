import React from "react";
import { View, Text, Image } from "react-native";

import Button from "../components/Button/button";

import { global } from '../styles';
import Loading from "../components/Loading/loading";

import user from '../../assets/icons/user.png';
import { styles } from "./styles";
import Divider from "../components/Divider/divider";

interface IProps {
    navigation: any,
}
const Landing = (props: IProps) => {

    const LoginPressed = () => {
        props.navigation?.navigate('Login');
    }

    const RegisterPressed = () => {
        props.navigation?.navigate('Register');
    }

    return (
        <View style={[global.container, global.center]}>

            <View style={styles.container}>
                <Image source={user} style={styles.icon} resizeMode='contain' />

                <Text style={[global.h2, global.center]}>
                    Welcome Home
                </Text>
                <Text style={[global.h4, global.center, { opacity: 0.2 }]}>
                    Sign in to continue
                </Text>
            </View>

            <Button text="Login" onPress={LoginPressed} />

            <Divider text="Or" />

            <Button text="Create an Account" onPress={RegisterPressed} />
        </View>
    );
}

export default Landing;