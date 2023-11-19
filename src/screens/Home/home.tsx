import React, { useCallback } from "react";
import { View, Text, Pressable, ImageBackground, Image } from "react-native";
import { useStateContext } from "../../context/ContextProvider";

import { MaterialIcons } from '@expo/vector-icons';

import { colours, global } from "../../styles";
import { styles } from "./styles";
import Container from "../../components/Container/container";
import { useFocusEffect } from "@react-navigation/native";

import image from '../../../assets/placeholder/image.png';
import Button from "../../components/Button/button";
import storageService from "../../services/storage.service";

interface IProps {
    navigation: any,
}
const Home = (props: IProps) => {

    const { home } = useStateContext();

    const OpenManageHome = () => {
        props.navigation.push('ManageHome');
    }

    const Wipe = async () => {
        storageService.RemoveData('lists');
        storageService.RemoveData('items');
        storageService.RemoveData('loading');
    }

    return (
        <Container>
            <ImageBackground
                source={{ uri: Image.resolveAssetSource(image).uri }}
                style={styles.image}
            />
            <View style={styles.container}>

                <View style={[global.horizontal, styles.header]}>
                    <Text style={global.h2}>
                        🏠 {home.name}
                    </Text>
                    <Pressable style={global.icon_button} onPress={OpenManageHome}>
                        <MaterialIcons name="emoji-people" size={32} color={colours.pink} />
                    </Pressable>
                </View>

                <Text style={global.h3}>
                    Welcome to iCohabit!
                </Text>

                <Button
                    text="DEBUG: Wipe Local Data"
                    onPress={Wipe}
                />

            </View>
        </Container>
    );
}

export default Home;