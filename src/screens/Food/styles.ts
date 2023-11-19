import { StyleSheet } from "react-native";
import { colours, fonts } from "../../styles";

export const styles = StyleSheet.create({
    header: {
        backgroundColor: colours.pink,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    select: {
        flexDirection: 'row',
        backgroundColor: 'white',
        alignSelf: 'center',
        padding: 5,
        borderRadius: 30,
        marginTop: -20,
    },
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
    },
    text_active: {
        opacity: 1,
        color: 'white',
    },
    title: {
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    add_item: {
        backgroundColor: 'white',
        alignSelf: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    add_item_icon: {
        opacity: 0.4,
        fontSize: 28,
    },
    add_item_text: {
        fontFamily: fonts.bold,
        textTransform: 'uppercase',
        opacity: 0.4,
        fontSize: 18,
    },
    category: {
        marginBottom: 10,
        overflow: 'visible'
    }
});