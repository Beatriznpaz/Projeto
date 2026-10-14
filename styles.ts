import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

export const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 100,
    },
    logoContainer: {
        alignItems: 'center',
    },
    //aumentar o polvinho
    logoImage: {
        width: 230,
        height: 230,
        marginBottom: -60,
        resizeMode: 'contain',
    },
    line: {
        width: width * 0.35,
        height: 1,
        backgroundColor: '#FFFFFF',
        marginBottom: 0.2,
    },
    //ajustar o +study
    logoText: {
        fontSize: 47,
        color: '#FFFFFF',
        fontWeight: '300',
    },
})