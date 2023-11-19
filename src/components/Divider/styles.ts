import { StyleSheet } from "react-native";
import { colours, fonts } from "../../styles";

export const styles = StyleSheet.create({
    line: {
        height: 2,
        flex: 1,
        backgroundColor: colours.pink,
        marginVertical: 25,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginHorizontal: 10,
        fontFamily: fonts.semibold,
        color: colours.pink,
    }
});