import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

interface IProps {
    text?: string,
    color?: string,
}
const Divider = (props: IProps) => {

    const line = (
        <View style={[styles.line, props.color && { backgroundColor: props.color }]} />
    );

    if (!props.text) {
        return line;
    }
    else {
        return (
            <View style={styles.container}>
                {line}
                <Text style={[styles.text, props.color && { color: props.color }]}>
                    {props.text}
                </Text>
                {line}
            </View>
        )
    }
}

export default Divider