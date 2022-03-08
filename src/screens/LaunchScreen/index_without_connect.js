import React  from 'react'
import PropTypes from 'prop-types'
import {View, ActivityIndicator, Text} from "react-native";
import styles from './styles';

function LaunchScreen(props) {
    return (
        <View style={styles.container}>
            <Text>
              This is LAUNCH SCREEN...
            </Text>
        </View>
    )
}

export default LaunchScreen
