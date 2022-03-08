import { StyleSheet } from 'react-native';
import colors from 'assets/styles/colors';

export default StyleSheet.create({
    body: {
        flex: 1,
        position: 'relative',
        paddingBottom:60
    },
    button: {
        width: 60,
        height: 60,
        backgroundColor: '#0080ff',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        right: 10,
        elevation: 5,
        zIndex: 1
    },
    item: {
        marginHorizontal: 10,
        marginVertical: 7,
        paddingRight: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 5
    },
    title: {
        color: 'black',
        fontSize: 30,
        margin: 5
    },
    subtitle: {
        color: 'black',
        fontSize: 20,
        margin: 5
    },
    item_row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    item_body: {
        flex: 1
    },
    delete: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    color: {
        width: 20,
        height: 100,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
    }
})
