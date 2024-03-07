import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#262626',
        padding: 15,
        borderColor: '#808080',
        borderWidth: 1,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 8,
        minHeight: 64,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },
    check: {
        width: 17.45,
        height: 17.45,
        borderColor: '#4EA8DE',
        borderWidth: 2,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    checkDone: {
        backgroundColor: '#5E60CE',
        width: 17.45,
        height: 17.45,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        marginRight: 10,
        marginLeft: 10,
        flex: 1,
        color: '#fff'
    },
    titleDone: {
        textDecorationLine: 'line-through',
    }
})

export default styles