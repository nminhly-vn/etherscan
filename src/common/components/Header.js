
import React from 'react'
import { View, StyleSheet } from 'react-native'
import FastImage from 'react-native-fast-image'

const logo = require('../../assets/images/logo.png')

function Header (props) {
  const {
    rightComponent
  } = props

  const renderRightCompoment = () => {
    return (
      rightComponent || null
    )
  }

  return (
    <View style={styles.container}>
      <View>
        <FastImage
          style={styles.logo}
          source={logo}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
      {
        renderRightCompoment()
      }
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#004ddc',
    height: 65,
    alignItems: 'center'
  },
  logo: {
    width: 160,
    height: 35
  },
  qrcode_wrapper: {
  },
  button_qrcode_wrapper: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  qrcode: {
    color: '#FFFFFF'
  }
})
