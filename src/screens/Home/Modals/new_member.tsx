import React, { useState } from 'react'
import { Modal, View, Text, TouchableWithoutFeedback } from 'react-native'

import { Entypo } from '@expo/vector-icons';
import Button from '../../../components/Button/button'

import { global, modals } from '../../../styles'
import Divider from '../../../components/Divider/divider';
import InputButton from '../../../components/InputButton/input_button';
import homeService from '../../../services/home.service';

interface IProps {
    active: boolean,
    setActive: Function,
}
const NewMemberModal = (props: IProps) => {

    const [code, setCode] = useState("");

    const ScanCode = () => {

    }

    const InviteMember = () => {
        homeService.InviteMember(code).then(
            (res) => {
                if (res.status !== 200) return;
                props.setActive(false);
            }
        );
    }

    return (
        <Modal
            visible={props.active}
            transparent={true}
            animationType='fade'
        >
            <View style={modals.container}>
                <View style={modals.content}>
                    <Text style={[global.h2, { marginBottom: 10 }]}>
                        Add New Member
                    </Text>

                    <Button
                        text='Scan QR Code'
                        onPress={ScanCode}
                        icon={(<Entypo name="camera" size={24} color="white" />)}
                        hideShadow={true}
                        style={{ marginBottom: 20 }}
                    />

                    <InputButton
                        label='Invite Code'
                        button='Invite'
                        icon='plus'
                        value={code}
                        placeholder="ICOHA"
                        onChangeText={(text) => setCode(text)}
                        onPress={InviteMember}
                    />

                    <Button
                        text='Cancel'
                        onPress={() => props.setActive(false)}
                        grey={true}
                        style={{ marginTop: 30 }}
                    />
                </View>
            </View>
        </Modal>
    )
}

export default NewMemberModal;