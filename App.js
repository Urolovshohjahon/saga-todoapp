import React, { Component } from 'react';
import { StatusBar, YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import createStore from './src/store/createStore';
import { PersistGate } from 'redux-persist/lib/integration/react';
import AppWithNavigationState from './src/navigators/AppNavigator';
import NavigationService from './src/navigators/NavigationService';
import LaunchScreen from './src/screens/LaunchScreen/index_without_connect';
import sentry from "./src/services/sentry";

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import i18n from './src/services/i18n';
import { I18nextProvider } from 'react-i18next';

sentry.init();
const { store, persistor } = createStore();

/* YellowBox.ignoreWarnings([
  'Warning: componentWillReceiveProps has been renamed',
  'Warning: AsyncStorage has been extracted from react-native core and will be removed in a future release',
]); */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }
  componentDidMount() {

  }
  componentWillUnmount() {

  }

  render() {
    return (
      <Provider store={store}>
        <NavigationContainer ref={NavigationService._navigator}>
          <PersistGate loading={<LaunchScreen />} persistor={persistor}>
            <I18nextProvider i18n={i18n()}>
              <StatusBar backgroundColor="white" barStyle="dark-content" />
              <AppWithNavigationState />
            </I18nextProvider>
          </PersistGate>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
