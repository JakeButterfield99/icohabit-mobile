import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import { styles } from './styles';
import { Entypo } from '@expo/vector-icons';

interface IProps {
    type: string,
    label: string,
    icon: any,
    value: string,
    placeholder: string,
    onChangeText: (text: string) => void,
    activeInput: string,
    setActiveInput: (text: string) => void,
}

const Input = (props: IProps) => {

    const active = props.activeInput === props.type;
    const input = useRef<TextInput>();
    const hasEntry = props.value && props.value !== "";
    const secure = ['password', 'passwordConfirmation'].includes(props.type);

    const InputActive = () => {
        props.setActiveInput(props.type);
    }

    useEffect(() => {
        if (!active) return;
        if (!input.current) return;
        input.current.focus();
    }, [active]);

    const show = active || hasEntry;

    return (
        <TouchableWithoutFeedback onPress={InputActive}>
            <View style={[styles.input, active && styles.input_active]}>

                <Entypo
                    name={props.icon}
                    style={[styles.icon, show && styles.icon_active]}
                />

                <View style={styles.content}>
                    <Text style={styles.label}>
                        {props.label}
                    </Text>
                    <TextInput
                        ref={input}
                        placeholder={props.placeholder}
                        onChangeText={props.onChangeText}
                        value={props.value}
                        style={[styles.entry, show && styles.entry_active]}
                        autoCapitalize="none"
                        secureTextEntry={secure}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Input;