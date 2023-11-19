import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import homeService from '../../services/home.service'

import Container from '../../components/Container/container'
import GoBack from '../../components/GoBack/go_back'
import Loading from '../../components/Loading/loading'
import SvgQRCode from 'react-native-qrcode-svg';

import { colours, global } from '../../styles'
import { styles } from './styles'

interface IProps {
    navigation: any,
}
const ViewInvite = (props: IProps) => {

    const [loading, setLoading] = useState(true);
    const [code, setCode] = useState("");
    const [expires, setExpires] = useState();
    const [qrSize, setQrSize] = useState(0);

    useEffect(() => {
        homeService.GetInviteCode().then(
            (res) => {
                setCode(res.data.code);
                setExpires(res.data.expires);
                setLoading(false);
            }
        )
    });

    useEffect(() => {
        props.navigation.setOptions({
            headerLeft: () => (<GoBack navigation={props.navigation} />),
        })
    }, [props.navigation])

    if (loading)
        return <Loading />;

    return (
        <Container>
            <View style={global.container}>
                <Text style={[global.h1, { marginBottom: 10 }]}>
                    Invite Code
                </Text>

                <View style={[styles.code, global.shadow, { marginBottom: 30 }]}>
                    <Text style={styles.text}>
                        {code}
                    </Text>
                </View>

                <View
                    style={[styles.code, global.shadow, { height: '50%' }]}
                    onLayout={(e) => {
                        const { width } = e.nativeEvent.layout;
                        setQrSize(width * 0.75);
                    }}
                >
                    <SvgQRCode
                        value={code}
                        color={colours.pink}
                        size={qrSize}
                    />
                </View>
            </View>
        </Container>
    )
}

export default ViewInvite;