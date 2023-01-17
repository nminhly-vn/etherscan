/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View
} from 'react-native'

import {
  Colors
} from 'react-native/Libraries/NewAppScreen'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import AppNavigator from './src/navigation/AppNavigator'
import store from './src/common/store'
import Camera from './src/common/components/Camera'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  }

  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <View
            style={styles.app}
          >
            <AppNavigator key='main' zIndex={1} />
            <Camera.Component key='app-camera' zIndex={2} />
          </View>
        </PersistGate>
      </Provider>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  app: {
    flex: 1
  }
})

export default App
