import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  BackHandler,
  SafeAreaView
} from 'react-native'
import CameraComponent from './CameraComponent'
import AntDesign from 'react-native-vector-icons/AntDesign'

const { width, height } = Dimensions.get('screen')
const { height: windowHeight } = Dimensions.get('window')

let instance = null
class QRCodeScan extends Component {
  constructor (props) {
    super(props)

    this.state = {
      cameraAvailable: false,
      cameraDisabledPopupVisible: false,
      show: false,
      qrCode: false,
      image: null,
      imageData: null,
      capureType: 'data-uri'
    }
    instance = this
    this.captureCallback = null

    this.onBack = this.onBack.bind(this)
    this.handleHide = this.handleHide.bind(this)
    this.showQrcode = this.showQrcode.bind(this)
  }

  handleHide () {
    BackHandler.removeEventListener('hardwareBackPress', this.onBack)
    this.setState({
      show: false,
      image: null
    }, () => {
      this.onCaptureCallback = null
    })
  }

  showQrcode (captureCallback) {
    this.onCaptureCallback = captureCallback
    this.setState({
      show: true,
      qrCode: true
    }, () => {})
  }

  isShow () {
    return this.state.show
  }

  onBack () {
    this.handleHide()
  }

  show (captureCallback, image, captureOption) {
    this.onCaptureCallback = captureCallback
    BackHandler.removeEventListener('hardwareBackPress', this.onBack)
    this.setState({
      show: true,
      image,
      qrCode: false,
      captureOption
    }, () => {
      BackHandler.addEventListener('hardwareBackPress', this.onBack)
    })
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.onBack)
  }

  render () {
    const { zIndex } = this.props
    const { show, qrCode } = this.state
    if (!show) {
      return null
    }
    return (
      <SafeAreaView
        edges={['bottom']}
        style={[styles.container, { zIndex, height: qrCode ? windowHeight : height }]}
      >
        <View style={{ flex: 1 }}>
          <CameraComponent
            handleSuccess={this.onCaptureCallback}
          />
          <TouchableOpacity style={styles.icon_wrapper} key='0' onPress={this.handleHide}>
            <AntDesign name='closecircleo' size={50} color='#004ddc' />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 0,
    left: 0,
    backgroundColor: '#ffffff',
    width,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    height
  },
  icon_wrapper: {
    right: 30,
    top: StatusBar.currentHeight + 32,
    position: 'absolute',
    zIndex: 99
  }
})

export default {
  Component: QRCodeScan,
  show (callback, image = null, options = {}) {
    instance &&
      instance.show(callback, image, options)
  },
  showQrcode (callback) {
    instance &&
      instance.showQrcode(callback)
  },
  hide () {
    instance && instance.handleHide()
  },
  isShow () {
    return instance && instance.isShow()
  }
}
