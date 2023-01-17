
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Header from '../common/components/Header'
import WatchList from '../modules/watchList/containers/WatchList'

const WatchlistPage = () => {
  return (
    <View style={styles.container}>
      <Header />
      <WatchList />
    </View>
  )
}

export default WatchlistPage

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
