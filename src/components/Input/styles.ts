import { StyleSheet } from "react-native";
import { colours, fonts, global } from "../../styles";

export const styles = StyleSheet.create({
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        height: 60,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    input_active: {
        backgroundColor: 'white',

        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    icon: {
        fontSize: 20,
        opacity: 0.2,
    },
    icon_active: {
        opacity: 1,
        color: colours.pink,
    },
    content: {
        flexDirection: 'column',
        marginLeft: 10,
    },
    label: {
        fontFamily: fonts.semibold,
        textTransform: 'uppercase',
        opacity: 0.4,
    },
    entry: {
        display: 'none',
        color: colours.pink,
        fontFamily: fonts.semibold,
    },
    entry_active: {
        display: 'flex',
    },
});