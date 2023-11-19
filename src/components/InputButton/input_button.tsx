import React, { useEffect, useRef } from 'react'
import { TextInput, View, Text } from 'react-native'

import { styles as input_styles } from '../Input/styles';
import { Entypo } from '@expo/vector-icons';
import { styles } from './styles';
import Button from '../Button/button';
import { global } from '../../styles';

interface IProps {
    label: string,
    button: string,
    icon: any,
    value: string,
    placeholder: string,
    onChangeText: (text: string) => void,
    onPress: Function,
}
const InputButton = (props: IProps) => {

    const input = useRef<TextInput>();

    useEffect(() => {
        if (!input.current) return;
        input.current.focus();
    }, []);

    return (
        <View style={styles.container}>
            <View style={[input_styles.input, input_styles.input_active, styles.input]}>
                <Entypo
                    name={props.icon}
                    style={[input_styles.icon, input_styles.icon_active]}
                />

                <View style={input_styles.content}>
                    <Text style={input_styles.label}>
                        {props.label}
                    </Text>
                    <TextInput
                        ref={input}
                        placeholder={props.placeholder}
                        onChangeText={props.onChangeText}
                        value={props.value}
                        style={[input_styles.entry, input_styles.entry_active]}
                        autoCapitalize="none"
                    />
                </View>
            </View>

            <Button
                text={props.button}
                onPress={props.onPress}
                style={styles.button}
            />
        </View>
    )
}

export default InputButton