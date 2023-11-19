import { StyleSheet } from "react-native";
import { colours } from "../../styles";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    input: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        flex: 3,
    },
    button: {
        flex: 1,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
    }
});