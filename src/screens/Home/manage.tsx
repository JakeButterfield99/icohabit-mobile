import { useFocusEffect } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import { ImageBackground, Image, View, Text, Pressable } from 'react-native'

import { useStateContext } from '../../context/ContextProvider'

import Container from '../../components/Container/container'
import GoBack from '../../components/GoBack/go_back'
import { MaterialIcons, Entypo } from '@expo/vector-icons';

import image from '../../../assets/placeholder/image.png';
import user from '../../../assets/placeholder/user.png';

import { styles } from './styles'
import { colours, global } from '../../styles'
import NewMemberModal from './Modals/new_member'

interface IProps {
    navigation: any,
}
const ManageHome = (props: IProps) => {

    const { home } = useStateContext();

    const [newMember, setNewMember] = useState(false);

    useFocusEffect(
        useCallback(() => {
            props.navigation.setOptions({
                title: home.name,
                headerLeft: () => (<GoBack navigation={props.navigation} />),
            });
        }, [props.navigation])
    )

    const ImageButton = () => {
        console.log('upload image');
    }

    const NewMember = () => {
        setNewMember(true);
    }

    return (
        <Container>

            <NewMemberModal
                active={newMember}
                setActive={setNewMember}
            />

            <ImageBackground
                source={{ uri: Image.resolveAssetSource(image).uri }}
                style={styles.image}
            >
                <Pressable
                    style={global.icon_button}
                    onPress={ImageButton}
                >
                    <MaterialIcons name="image" size={32} color={colours.pink} />
                </Pressable>
            </ImageBackground>
            <View style={styles.container}>

                <View style={[global.horizontal, { marginBottom: 20 }]}>
                    <Text style={[global.h2, { marginRight: 5 }]}>
                        🏠 {home.name}
                    </Text>
                    <MaterialIcons
                        name="edit"
                        style={styles.icon}
                    />
                </View>

                <Text style={global.h4}>
                    Home Members
                </Text>

                <View style={styles.members}>

                    <View style={[styles.member, global.shadow]}>
                        <Image
                            source={{ uri: Image.resolveAssetSource(user).uri }}
                            style={styles.user}
                        />
                        <Text style={styles.name}>
                            Jake
                        </Text>
                    </View>

                    <View style={[styles.member, global.shadow]}>
                        <Image
                            source={{ uri: Image.resolveAssetSource(user).uri }}
                            style={styles.user}
                        />
                        <Text style={styles.name}>
                            Saharsh
                        </Text>
                    </View>

                    <View style={[styles.member, global.shadow]}>
                        <Image
                            source={{ uri: Image.resolveAssetSource(user).uri }}
                            style={styles.user}
                        />
                        <Text style={styles.name}>
                            Hannah
                        </Text>
                    </View>

                    <View style={[styles.member, global.shadow]}>
                        <Image
                            source={{ uri: Image.resolveAssetSource(user).uri }}
                            style={styles.user}
                        />
                        <Text style={styles.name}>
                            Elser
                        </Text>
                    </View>

                    <View style={[styles.member, global.shadow, { backgroundColor: 'transparent' }]}>
                        <Pressable style={styles.plus} onPress={NewMember}>
                            <Entypo
                                name="plus"
                                size={32}
                                style={{ opacity: 0.4 }}
                            />
                        </Pressable>
                    </View>

                </View>

            </View>
        </Container>
    )
}

export default ManageHome