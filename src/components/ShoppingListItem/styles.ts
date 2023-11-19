import { StyleSheet } from "react-native";
import { colours, fonts } from "../../styles";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    active: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
    active_left: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
    },
    text: {
        fontFamily: fonts.regular,
        fontSize: 16,
    },
    checked: {
        textDecorationStyle: 'solid',
        textDecorationLine: 'line-through',
    },
    quantity: {
        color: colours.pink,
        fontFamily: fonts.semibold,
    },
    delete: {
        width: 85,
        backgroundColor: colours.pink,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    delete_button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    delete_text: {
        fontFamily: fonts.bold,
        color: 'white',
        textTransform: 'uppercase'
    },
    edit: {
        width: 100,
        backgroundColor: colours.blue,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    edit_content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    edit_text: {
        fontFamily: fonts.semibold,
        color: 'black',
        fontSize: 24,
        marginHorizontal: 10,
        opacity: 0.8,
    },
    edit_icon: {
        fontSize: 24,
        opacity: 0.8,
    }
});