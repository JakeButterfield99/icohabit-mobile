import { StyleSheet } from "react-native";
import { colours, fonts } from "../../styles";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 10,
    },
    text: {
        marginHorizontal: 10,
        flex: 1,
    },
    list_name: {
        fontFamily: fonts.semibold,
        fontSize: 16,
    },
    list_length: {
        fontFamily: fonts.regular,
    },
});