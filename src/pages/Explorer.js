
import React from 'react'
import { StyleSheet, View } from 'react-native'
import HeaderCustom from '../modules/explorer/containers/HeaderCustom'
import Explorer from '../modules/explorer/containers/Explorer'

const ExplorerPage = (props) => {
  return (
    <View style={styles.container}>
      <HeaderCustom {...props} />
      <Explorer />
    </View>
  )
}

export default ExplorerPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})
