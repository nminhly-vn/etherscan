
import I18n from 'i18n-js'
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Header from '../common/components/Header'

const FavoritePage = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text>{I18n.t('page.favourite_desc')}</Text>
      </View>
    </View>
  )
}

export default FavoritePage

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
