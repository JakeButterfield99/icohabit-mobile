import React, { ReactNode } from "react";

import { Pressable, Text } from "react-native";
import { global } from "../../styles";

import { styles } from './styles';

interface IProps {
    text: string,
    onPress: Function,
    style?: any,
    hideShadow?: boolean,
    grey?: boolean,
    icon?: ReactNode,
}
const Button = (props: IProps) => {
    const ButtonPressed = () => {
        props.onPress();
    }

    return (
        <Pressable style={[styles.button, props.style, !props.hideShadow && global.shadow, props.grey && styles.grey]} onPress={ButtonPressed}>
            {props.icon}
            <Text style={[styles.text, props.icon && { marginLeft: 10 }]}>{props.text}</Text>
        </Pressable>
    )
}

export default Button;