
import React, { useCallback } from 'react'
import { TouchableOpacity, StyleSheet, Alert } from 'react-native'
import Camera from '../../../common/components/Camera'
import { wait } from '../../../utils/effect'
import Header from '../../../common/components/Header'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const HeaderCustom = (props) => {
  const {
    addWatchlist,
    navigation
  } = props

  const handleScanQRCode = useCallback(async () => {
    Camera.showQrcode(async (response) => {
      try {
        Camera.hide()
        await wait(1000)
        const data = await addWatchlist(response.data)
        if (!data || data.message) {
          Alert.alert(
            'Error:',
            `${data.message}`,
            [
              {
                text: 'OK',
                style: 'default'
              }
            ]
          )
        }
        navigation.navigate('Watchlist')
      } catch (err) {
      }
    })
  }, [])

  return (
    <Header
      rightComponent={
        <TouchableOpacity
          onPress={handleScanQRCode}
          style={styles.button_qrcode_wrapper}
        >
          <FontAwesome name='qrcode' style={styles.qrcode} size={30} />
        </TouchableOpacity>
      }
    />
  )
}

export default HeaderCustom

const styles = StyleSheet.create({
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
