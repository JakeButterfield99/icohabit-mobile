import React, { useRef, useState } from 'react'
import { View, Text, Pressable, Animated } from 'react-native'
import { Swipeable } from 'react-native-gesture-handler'
import foodService from '../../services/food.service'
import { ListEntry } from '../../types'
import { styles } from './styles'

import { Entypo } from '@expo/vector-icons';

interface IProps {
    list_id: number,
    entry: ListEntry,
    onUpdate: Function,
}
const ShoppingListItem = (props: IProps) => {

    const [actionOpen, setActionOpen] = useState("");

    const swiper = useRef<Swipeable>();

    const DeleteItem = () => {
        foodService.RemoveItem(props.entry.item.id, props.list_id).then((res) => {
            console.log('deleted', res.status, res.data);
            if (res.status !== 204) return;
            swiper.current.close();
            props.onUpdate();
        });
    }

    const DeleteAction = (progress: Animated.AnimatedInterpolation, dragX) => {
        const trans = progress.interpolate({
            inputRange: [0, 1],
            outputRange: [85, 0],
        });
        progress.addListener((value) => {
            if (value.value > 0 && ["", "left"].includes(actionOpen))
                setActionOpen("right");
        });
        return (
            <View style={styles.delete}>
                <Animated.View style={[styles.delete_button, { transform: [{ translateX: trans }] }]}>
                    <Pressable onPress={DeleteItem}>
                        <Text style={styles.delete_text}>
                            Remove
                        </Text>
                    </Pressable>
                </Animated.View>
            </View>
        );
    }

    const EditAction = (progress: Animated.AnimatedInterpolation, dragX) => {
        const trans = progress.interpolate({
            inputRange: [0, 1],
            outputRange: [-100, 0],
        });
        progress.addListener((value) => {
            if (value.value > 0 && ["", "right"].includes(actionOpen))
                setActionOpen("left");
        });
        return (
            <View style={styles.edit}>
                <Animated.View style={[styles.edit_content, { transform: [{ translateX: trans }] }]}>
                    <Pressable onPress={MinusOne}>
                        <Entypo name="minus" style={styles.edit_icon} />
                    </Pressable>

                    <Text style={[styles.edit_text]}>
                        {props.entry.quantity}
                    </Text>

                    <Pressable onPress={AddOne}>
                        <Entypo name="plus" style={styles.edit_icon} />
                    </Pressable>
                </Animated.View>
            </View>
        );
    }

    const MinusOne = () => {
        foodService.MinusItem(props.entry.item.id, props.list_id).then((res) => {
            props.onUpdate();
        });
    }

    const AddOne = () => {
        foodService.PlusItem(props.entry.item.id, props.list_id).then((res) => {
            props.onUpdate();
        });
    }

    const CheckItem = () => {
        foodService.CheckItem(props.entry.item.id, props.list_id).then((res) => {
            props.onUpdate();
        });
    }

    return (
        <Swipeable
            ref={swiper}
            renderRightActions={DeleteAction}
            renderLeftActions={EditAction}
            friction={2}
            onSwipeableClose={() => {
                setActionOpen("");
            }}
            overshootLeft={false}
            overshootRight={false}
            containerStyle={{
                marginBottom: 7.5
            }}
        >
            <Pressable onPress={CheckItem} style={[styles.container, actionOpen === "right" && styles.active, actionOpen === "left" && styles.active_left]}>
                <Text style={[styles.text, props.entry.checked && styles.checked]}>
                    {props.entry.item.name}
                </Text>
                {props.entry.quantity > 1 &&
                    <Text style={[styles.text, styles.quantity]}>
                        {props.entry.quantity}
                    </Text>
                }
            </Pressable>

        </Swipeable>
    )
}

export default ShoppingListItem