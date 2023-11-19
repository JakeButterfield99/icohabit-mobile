import React, { useState } from 'react'
import { View, Image, ImageBackground, Text, Pressable } from 'react-native'

import { AntDesign, FontAwesome } from '@expo/vector-icons';

import home from '../../../assets/welcome/home.png';
import kitchen from '../../../assets/welcome/kitchen.png';
import shopping from '../../../assets/welcome/shopping.png';
import welcome from '../../../assets/welcome/welcome.png';

import { styles } from './styles';
import { global } from '../../styles';

interface HelpEntry {
    image: string,
    title: string,
    text: string,
}
const HelpContent: HelpEntry[] = [
    {
        image: Image.resolveAssetSource(welcome).uri,
        title: 'Welcome to iCohabit',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nibh nisi, mattis sagittis accumsan in, malesuada imperdiet erat. Nullam fermentum nunc id leo congue eleifend.',
    },
    {
        image: Image.resolveAssetSource(home).uri,
        title: 'Something about home',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nibh nisi, mattis sagittis accumsan in, malesuada imperdiet erat. Nullam fermentum nunc id leo congue eleifend.',
    },
    {
        image: Image.resolveAssetSource(shopping).uri,
        title: 'Something about shopping',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nibh nisi, mattis sagittis accumsan in, malesuada imperdiet erat. Nullam fermentum nunc id leo congue eleifend.',
    },
    {
        image: Image.resolveAssetSource(kitchen).uri,
        title: 'Something about kitchen',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
]

interface IProps {
    navigation: any,
}
const WelcomeModal = (props: IProps) => {

    const [active, setActive] = useState<number>(0);

    const content = HelpContent[active];
    const isFirstOption = active === 0;
    const isLastOption = active === HelpContent.length - 1;

    const GoBack = () => {
        if (isFirstOption) return;
        setActive(active - 1);
    }

    const Next = () => {
        if (isLastOption)
            props.navigation.goBack();
        else
            setActive(active + 1);
    }

    return (
        <ImageBackground
            source={{ uri: content.image }}
            style={styles.background}
        >
            <View style={[styles.content, styles.shadow]}>
                <Text style={styles.title}>
                    {content.title}
                </Text>
                <Text style={styles.text}>
                    {content.text}
                </Text>

                <View style={[global.horizontal, styles.nav]}>
                    <Pressable onPress={GoBack}>
                        <AntDesign
                            name="arrowleft"
                            style={[styles.icon, isFirstOption && { opacity: 0 }]}
                        />
                    </Pressable>

                    <View style={styles.center}>
                        <View style={[styles.circle, active === 0 && styles.circle_active]}></View>
                        <View style={[styles.circle, active === 1 && styles.circle_active]}></View>
                        <View style={[styles.circle, active === 2 && styles.circle_active]}></View>
                        <View style={[styles.circle, active === 3 && styles.circle_active]}></View>
                    </View>

                    <Pressable onPress={Next}>
                        {isLastOption ?
                            <FontAwesome
                                name="check"
                                style={styles.icon}
                            />
                            :
                            <AntDesign
                                name="arrowright"
                                style={styles.icon}
                            />
                        }

                    </Pressable>
                </View>
            </View>
        </ImageBackground>
    )
}

export default WelcomeModal