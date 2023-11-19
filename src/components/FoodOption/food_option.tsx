import React from 'react'
import { View, Text, Pressable } from 'react-native';
import { FOOD_ICONS } from '../../icons';
import { styles } from './styles';

interface IProps {
    id: number,
    name: string,
    category: string,
    length?: number,
    onPress: Function,
}
const FoodOption = (props: IProps) => {

    return (
        <Pressable style={styles.container} onPress={() => props.onPress()}>
            {FOOD_ICONS[props.category]}

            <View style={styles.text}>
                <Text style={styles.list_name}>
                    {props.name}
                </Text>

                {props.length || props.length >= 0 ?
                    <Text style={styles.list_length}>
                        {props.length} items
                    </Text>
                    : null
                }
            </View>



            {props.length || props.length >= 0 ?
                FOOD_ICONS.List
                :
                null
            }
        </Pressable>
    )
}

export default FoodOption;