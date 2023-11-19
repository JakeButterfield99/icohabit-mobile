import { StyleSheet } from "react-native";
import { colours, fonts } from "../../styles";

export const styles = StyleSheet.create({
    button: {
        backgroundColor: colours.pink,
        width: '100%',
        height: 60,
        borderRadius: 10,
        justifyContent: 'center',

        flexDirection: 'row',
        alignItems: 'center',
    },
    grey: {
        backgroundColor: colours.dark_grey,
    },
    text: {
        color: 'white',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 16,
        fontFamily: fonts.semibold,
    }
})