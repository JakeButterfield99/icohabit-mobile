import React from "react";
import { Pressable, Text } from "react-native";
import { styles } from "./styles";

import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

interface IProps {
    type: string,
    active: string,
    setActive: Function,
}
const SliderOption = (props: IProps) => {

    const isActive = props.active === props.type;

    const OnPress = () => {
        props.setActive(props.type);
    }

    const Options = {
        'shopping': {
            'text': "Shopping",
            'icon': (
                <FontAwesome
                    name="shopping-cart"
                    style={[styles.icon, isActive && styles.icon_active]}
                />
            )
        },
        'planner': {
            'text': "Planner",
            'icon': (
                <MaterialCommunityIcons
                    name="noodles"
                    style={[styles.icon, isActive && styles.icon_active]}
                />
            )
        },
    }

    return (
        <Pressable
            style={[styles.option, isActive && styles.option_active]}
            onPress={OnPress}
        >
            {Options[props.type].icon}
            <Text style={[styles.text, isActive && styles.text_active]}>
                {Options[props.type].text}
            </Text>
        </Pressable>
    )
}

export default SliderOption;