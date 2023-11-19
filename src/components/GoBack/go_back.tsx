import React from 'react'
import { Pressable } from 'react-native'

import { Ionicons } from '@expo/vector-icons';
import { global } from '../../styles';

interface IProps {
    navigation: any
}
const GoBack = (props: IProps) => {

    const OnPress = () => {
        props.navigation.goBack();
    }

    return (
        <Pressable onPress={OnPress} style={global.header_left}>
            <Ionicons name="arrow-back" size={24} color="black" />
        </Pressable>
    )
}

export default GoBack