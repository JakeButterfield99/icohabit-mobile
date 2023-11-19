import { StyleSheet } from "react-native";
import { colours, fonts } from "../../styles";

export const styles = StyleSheet.create({
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 15,
    },
    option_active: {
        backgroundColor: colours.pink,
    },
    icon: {
        color: 'black',
        opacity: 0.2,
        fontSize: 24,
        marginRight: 5,
    },
    icon_active: {
        opacity: 1,
        color: 'white',
    },
    text: {
        fontFamily: fonts.bold,
        fontSize: 16,
        opacity: 0.3,
        textTransform: 'uppercase',
    },
    text_active: {
        opacity: 1,
        color: 'white',
    },
})