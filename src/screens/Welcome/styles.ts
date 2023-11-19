import { StyleSheet } from "react-native";
import { colours, fonts } from "../../styles";

export const styles = StyleSheet.create({
    code: {
        backgroundColor: 'white',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    text: {
        fontSize: 32,
        fontFamily: fonts.semibold,
        color: colours.pink
    },
    invite: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        height: 50,
        aspectRatio: 1,
        marginRight: 10,
        borderRadius: 40,
    },
    content: {
        flex: 1,
    },
    label: {
        fontSize: 18,
        fontFamily: fonts.regular,
    }
})