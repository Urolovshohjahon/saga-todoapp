import { StyleSheet } from 'react-native';
import colors from "assets/styles/colors";
import {container, center} from '../../assets/styles/common';

export default StyleSheet.create({
    container:{
        ...container,
        ...center,
        backgroundColor: colors.white,
    }
})
