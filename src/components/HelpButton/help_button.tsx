import React from 'react'
import { Pressable, View } from 'react-native'

import { FontAwesome } from '@expo/vector-icons';

import { global } from "../../styles";

interface IProps {
    navigation: any
}
const HelpButton = (props: IProps) => {

    const OpenWelcomeButton = () => {
        props.navigation.push("WelcomeModal");
    }

    return (
        <Pressable
            onPress={OpenWelcomeButton}
        >
            <FontAwesome
                name="question-circle"
                style={global.header_right}
            />
        </Pressable>
    )
}

export default HelpButton