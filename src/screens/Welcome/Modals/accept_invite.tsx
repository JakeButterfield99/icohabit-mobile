import React from 'react'
import { Modal, View, Text } from 'react-native'
import Button from '../../../components/Button/button';
import { useStateContext } from '../../../context/ContextProvider';
import homeService from '../../../services/home.service';
import { colours, global, modals } from '../../../styles';
import { Home } from '../../../types'

interface IProps {
    home: Home,
    setHome: Function,
}
const AcceptInviteModal = (props: IProps) => {

    const show = props.home !== undefined;

    const { setHome } = useStateContext();

    const JoinHome = () => {
        homeService.JoinHome(props.home.id).then(
            (res) => {
                if (res.status !== 200) return;

                setHome(res.data.home);
                props.setHome(undefined);
            }
        )
    }

    if (!props.home)
        return null;

    return (
        <Modal
            visible={show}
            transparent={true}
            animationType='fade'
        >
            <View style={modals.container}>
                <View style={modals.content}>
                    <Text style={global.h2}>
                        Join
                        <Text style={{ color: colours.pink }}>
                            {' ' + props.home.name}
                        </Text>?
                    </Text>

                    <Text style={[global.h4, { marginVertical: 10 }]}>
                        Be sure of your choice! Probs show members here?
                    </Text>

                    <View style={global.horizontal}>
                        <Button
                            text='Cancel'
                            onPress={() => props.setHome(undefined)}
                            hideShadow={true}
                            grey={true}
                            style={modals.button}
                        />

                        <Button
                            text='Join'
                            onPress={JoinHome}
                            hideShadow={true}
                            style={modals.button}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default AcceptInviteModal;