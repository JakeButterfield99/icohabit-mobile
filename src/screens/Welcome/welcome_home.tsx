import React, { useEffect, useState } from 'react'
import { Image, Pressable, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native'
import { Formik, setIn } from 'formik';
import { useStateContext } from '../../context/ContextProvider';
import homeService from '../../services/home.service';

import Button from '../../components/Button/button';
import Container from '../../components/Container/container';
import Input from '../../components/Input/input';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

import user from '../../../assets/placeholder/user.png';

import { colours, fonts, global } from '../../styles';
import { styles } from './styles';
import { Home } from '../../types';
import AcceptInviteModal from './Modals/accept_invite';

interface IProps {
    navigation: any,
}
const WelcomeHome = (props: IProps) => {

    const { setHome } = useStateContext();

    const [invites, setInvites] = useState([]);
    const [joinHome, setJoinHome] = useState<Home>();

    const FormSubmit = (values: any) => {
        homeService.CreateHome(values.name).then(
            (res) => {
                if (res.status === 201) {
                    setHome(res.data);
                }
            }
        );
    }

    const LoadInvites = () => {
        homeService.GetInvites().then(
            (res) => {
                setInvites(res.data);
            }
        )
    }

    const ShowInviteCode = () => {
        props.navigation.push('ViewInvite');
    }

    const AcceptInvite = (home: Home) => {
        setJoinHome(home);
    }

    useEffect(() => {
        LoadInvites();
    }, []);

    return (
        <Container>

            <AcceptInviteModal
                home={joinHome}
                setHome={setJoinHome}
            />

            <ScrollView style={global.container}>

                <View style={{ marginBottom: 30 }}>
                    <Text style={[global.h1, { marginBottom: 10 }]}>
                        Create Home
                    </Text>

                    <Formik
                        initialValues={{ activeInput: '', name: '' }}
                        onSubmit={values => FormSubmit(values)}
                    >
                        {({ handleChange, handleSubmit, values, setFieldValue }) => (
                            <View>
                                <Input
                                    type='name'
                                    label='House Name'
                                    icon='home'
                                    value={values.name}
                                    placeholder='e.g. No 23, Burley Road, etc.'
                                    onChangeText={handleChange('name')}
                                    activeInput={values.activeInput}
                                    setActiveInput={(i) => setFieldValue('activeInput', i)}
                                />

                                <Button
                                    style={{ marginTop: 10 }}
                                    onPress={handleSubmit}
                                    text="Create"
                                />
                            </View>
                        )}
                    </Formik>
                </View>

                <View>

                    <View style={[global.horizontal, { marginBottom: 20 }]}>
                        <Text style={[global.h1, { flex: 1 }]}>
                            Your Invites
                        </Text>
                        <Pressable style={global.icon_button} onPress={LoadInvites}>
                            <FontAwesome name="refresh" size={32} color={colours.pink} />
                        </Pressable>
                        <Pressable style={[global.icon_button, { marginLeft: 15 }]} onPress={ShowInviteCode}>
                            <FontAwesome name="qrcode" size={32} color={colours.pink} />
                        </Pressable>
                    </View>

                    {invites.map(function (val, idx) {
                        return (
                            <Pressable key={idx} style={[styles.invite, global.shadow]} onPress={() => AcceptInvite(val.home)}>
                                <Image
                                    source={{ uri: Image.resolveAssetSource(user).uri }}
                                    style={[styles.icon]}
                                />

                                <View style={styles.content}>
                                    <Text style={[styles.label, { fontFamily: fonts.semibold }]}>
                                        From: {val.invite_user.first_name} {val.invite_user.last_name}
                                    </Text>
                                    <Text style={styles.label}>
                                        Join:
                                        <Text style={{ color: colours.pink, fontFamily: fonts.semibold }}>
                                            {' ' + val.home.name}
                                        </Text>
                                    </Text>
                                </View>

                                <MaterialIcons
                                    name="exit-to-app"
                                    size={42}
                                    color="black"
                                />
                            </Pressable>
                        )
                    })}


                </View>


            </ScrollView>
        </Container>
    )
}

export default WelcomeHome;