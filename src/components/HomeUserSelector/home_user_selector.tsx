import React from 'react'
import { View, Text, Pressable } from 'react-native'

import { global } from '../../styles';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { useStateContext } from '../../context/ContextProvider';
import { styles } from '../SliderOption/styles';

interface IProps {
    selected: string,
    setSelected: Function,
}
const HomeUserSelector = (props: IProps) => {

    const { home } = useStateContext();

    const homeActive = props.selected === 'home';
    const userActive = props.selected === 'user'

    const HomePressed = () => {
        props.setSelected('home');
    }

    const UserPressed = () => {
        props.setSelected('user');
    }

    return (
        <View style={[global.horizontal, {
            marginVertical: 10,
            justifyContent: 'center',
        }]}>

            <Pressable style={[styles.option, homeActive && styles.option_active]} onPress={HomePressed}>
                <Entypo name="home" style={[styles.icon, homeActive && styles.icon_active]} />
                <Text style={[styles.text, homeActive && styles.text_active]}>
                    {home.name}
                </Text>
            </Pressable>

            <Pressable style={[styles.option, userActive && styles.option_active]} onPress={UserPressed}>
                <FontAwesome name="user" style={[styles.icon, userActive && styles.icon_active]} />
                <Text style={[styles.text, userActive && styles.text_active]}>
                    Personal
                </Text>
            </Pressable>

        </View>
    )
}

export default HomeUserSelector;