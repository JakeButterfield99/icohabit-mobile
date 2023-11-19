/*
    Global Styles
*/

import { StyleSheet } from "react-native";

export const colours = {
    pink: '#FEA79E',
    off_white: '#F7FAFB',
    grey: '#F2F2F2',
    dark_grey: '#CCCCCC',
    blue: '#D8F3FF'
}

export const fonts = {
    regular: 'Poppins_400Regular',
    bold: 'Poppins_700Bold',
    light: 'Poppins_300Light',
    semibold: 'Poppins_600SemiBold'
}

export const global = StyleSheet.create({
    container: {
        height: '100%',
        padding: 20,
    },
    horizontal: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    center: {
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    h1: {
        fontSize: 32,
        fontFamily: fonts.bold,
    },
    h2: {
        fontSize: 28,
        fontFamily: fonts.bold,
    },
    h3: {
        fontSize: 24,
        fontFamily: fonts.bold,
    },
    h4: {
        fontSize: 20,
        fontFamily: fonts.semibold,
    },
    h5: {
        fontSize: 16,
        fontFamily: fonts.semibold,
    },
    input: {
        backgroundColor: 'white',
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
        fontSize: 18,
    },
    icon_button: {
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 10,

        alignSelf: 'flex-end',

        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    shadow: {
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    tabIcon: {
        color: 'black',
        fontSize: 38,
        marginTop: 5,
        opacity: 0.4,
    },
    tabActive: {
        opacity: 1,
        color: colours.pink
    },
    error: {
        fontSize: 16,
        fontFamily: fonts.semibold,
        color: '#cc0000',
        marginBottom: 3,
    },
    header_left: {
        marginLeft: 10,
        marginBottom: 10,
        fontSize: 32,
    },
    header_right: {
        marginRight: 10,
        marginBottom: 10,
        fontSize: 32,
    }
});

export const modals = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    content: {
        backgroundColor: 'white',
        padding: 20,
        width: '90%',
    },
    button: {
        flex: 1,
        marginHorizontal: 5,
    },
    form: {
        marginVertical: 10,
    }
});

export const header = {
    headerStyle: {
        backgroundColor: 'white',
        shadowOpacity: 10,
        shadowRadius: 5,
    },
    headerTitleStyle: {
        color: 'black',
        marginBottom: 10,
        fontFamily: fonts.bold,
        fontSize: 20,
    },
    headerLeft: null,
};