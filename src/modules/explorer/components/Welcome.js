
import I18n from 'i18n-js'
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <FontAwesome name='wpexplorer' style={styles.icon} size={120} />
      <Text style={styles.title}>{I18n.t('explorer.welcome')}</Text>
      <Text style={styles.detail}>{I18n.t('explorer.welcome_desc')}</Text>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    margin: 25,
    color: 'gray'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
    color: '#010101'
  },
  detail: {
    justifyContent: 'center',
    textAlign: 'center',
    maxWidth: 300
  }
})
