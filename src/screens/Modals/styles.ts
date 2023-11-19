import { StyleSheet } from "react-native";
import { colours, fonts } from "../../styles";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    content: {
        backgroundColor: 'white',
        padding: 20,
        paddingHorizontal: 30,
        paddingBottom: 40,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 270,
    },
    title: {
        fontFamily: fonts.bold,
        fontSize: 20,
        marginBottom: 10,
    },
    text: {
        fontFamily: fonts.regular,
        fontSize: 16,
        opacity: 0.6,
        flex: 1,
    },
    circle: {
        height: 24,
        aspectRatio: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        borderWidth: 1,
        borderRadius: 20,
        marginHorizontal: 4,
    },
    circle_active: {
        backgroundColor: colours.pink,
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    center: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center'
    },
    icon: {
        fontSize: 24,
        color: colours.pink,
    },
    shadow: {
        shadowOffset: { height: -5, width: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    }
});