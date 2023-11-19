import React from 'react';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { colours } from './styles';

const styles = StyleSheet.create({
    food_icon: {
        color: colours.pink,
        fontSize: 32,
    },
    food_list_icon: {
        color: 'white',
        fontSize: 40,
    },
    list_icon: {
        opacity: 0.4,
        fontSize: 24,
    }
})

export const FOOD_ICONS = {
    'Groceries': (
        <FontAwesome name="shopping-cart" style={styles.food_icon} />
    ),
    'List': (
        <FontAwesome5 name="list-ul" style={styles.list_icon} />
    )
}

export const LIST_ICONS = {
    'Groceries': (
        <FontAwesome name="shopping-cart" style={styles.food_list_icon} />
    )
}