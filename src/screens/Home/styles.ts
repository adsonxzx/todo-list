import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#191919',
        height: '100%',
    },

    header: {
        height: 173,
        backgroundColor: '#0D0D0D',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#000000'
    },

    input: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: -27
    }, 
    inputText: {
        borderWidth: 1,
        borderColor: '#000000',
        maxWidth: 271,
        height: 54,
        flex: 1,
        backgroundColor: '#262626',
        color: '#808080',
        borderRadius: 6,
        padding: 20
    }, 
    inputButton: {
        width: 54,
        height: 54,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 4,
        borderRadius: 6
    }, 
    
    taskInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        paddingBottom: 20,
        marginTop: 32,

    }, 
    taskInfoCreated: {
        flexDirection: 'row',
    },
    taskInfoCreatedText: {
        color: '#4EA8DE',
        fontWeight: 'bold'
    },
    taskInfoNumber: {
        width: 25,
        height: 19,
        backgroundColor: '#333333',
        color: "#fff",
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        textAlign: 'center'
    },
    taskInfoNumberText: {
        color: '#fff',
        fontWeight: 'bold'
    },
    taskInfoConcluded: {
        flexDirection: 'row',
    },
    taskInfoConcludedText: {
        color: '#8284FA',
        fontWeight: 'bold',
    },

    tasksEmpty: {
        paddingTop: 48,
        borderTopWidth: 1,
        borderColor: '#333333',
        marginLeft: 20,
        marginRight: 20,
        alignItems: 'center'
    },
    tasksEmptyText: {
        marginTop: 16,
        textAlign: 'center',
        color: '#fff'
    }
})

export default styles