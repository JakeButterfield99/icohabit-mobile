import { StyleSheet } from "react-native";
import { colours, fonts } from "../../styles";

export const styles = StyleSheet.create({
    image: {
        height: 125,
        padding: 10,
    },
    container: {
        backgroundColor: colours.grey,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        marginTop: -10,
        padding: 20,
        height: '100%',
    },
    header: {
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    icon: {
        color: colours.pink,
        fontSize: 28,
    },
    members: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        flexWrap: 'wrap',
        marginTop: 10,
    },
    member: {
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 10,
        width: '30%',
        marginHorizontal: '1.5%',
        marginBottom: 10,
        borderRadius: 10,
        height: 140,
        justifyContent: 'center',
    },
    user: {
        aspectRatio: 1,
        height: 85,
        borderRadius: 80,
    },
    name: {
        marginTop: 10,
        fontFamily: fonts.semibold,
        fontSize: 14,
    },
    plus: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10
    }
});