import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#555555',
        borderRadius: 10,
        backgroundColor: 'white',
        textAlign: 'left',
        fontSize: 20,
        margin: 10,
        paddingHorizontal: 10
    },
    checkbox: {
        flexDirection: 'row',
        margin: 10
    },
    text: {
        fontSize: 20,
        color: '#000000'
    },
    color_bar: {
        flexDirection: 'row',
        height: 50,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#555555',
        marginVertical: 10
    },
    color_white: {

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    color_red: {

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f28b82'
    },
    color_blue: {

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#aecbfa'
    },
    color_green: {

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ccff90',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },
    extra_row: {
        flexDirection: 'row',
        marginVertical: 10
    },
    extra_button: {
        width: 100,
        flex: 1,
        height: 50,
        backgroundColor: '#0080ff',
        borderRadius: 10,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centered_view: {
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        zIndex: 1,
        backgroundColor: '#000099',
        justifyContent: 'center',
        alignItems: 'center',

    },
    text:{
        color:'white',
        fontSize:20,
        fontWeight:'400'
    }
})