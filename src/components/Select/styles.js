import { StyleSheet, Dimensions } from 'react-native';
import {center, statusBarHeight, horizontal} from 'assets/styles/common'
import colors from "assets/styles/colors";

const { height } = Dimensions.get('window');

export default StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 0
    },
    scrollableModal: {
        height: height*0.9,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: colors.white
    },
    scrollableModalContent: {
        paddingVertical: 12,
        paddingHorizontal: 20
    },
    scrollableModalText: {
        color:'#000000',
        fontSize:16,
        // fontFamily:'SFProDisplay-Regular'
    },
    scroll: {
        paddingBottom: 20
    },
    title:{
        fontSize: 12,
        color:'#6D7581',
        letterSpacing: -0.0636608,
        // fontFamily:'SFProDisplay-Medium',
        opacity: 0.7,
    },
    text: {
        width: '100%',
        paddingVertical:4,
        fontSize: 18,
        // fontFamily:'SFProDisplay-Medium',
        opacity:0.7,
        textAlign: 'left'
    },
    hairlineWidth: {
        height: 1,
        backgroundColor: '#EAEBEE',
        // marginRight: 20,
        marginTop: 10
    },
    arrow: {
        position: "absolute",
        bottom: 20,
        right: 10
    },
    top: {
        ...horizontal,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: colors.white,
        justifyContent: "space-between",
        borderBottomColor: "rgba(197,197,197,1)",
        borderBottomWidth: 0.5
    },
    close: {
        paddingHorizontal: 12,
        paddingVertical: 12
    },
    closeButtonText: {
        fontSize: 14,
        // fontFamily:'SFProDisplay-Bold',
    },
    emptyWrap: {
        ...center,
        marginTop: 80
    }
});
