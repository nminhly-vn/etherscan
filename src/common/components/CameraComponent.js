import { memo, useEffect, useState } from 'react'
import { StyleSheet, Text } from 'react-native'
import { useCameraDevices, Camera } from 'react-native-vision-camera'
import { useScanBarcodes, BarcodeFormat } from 'vision-camera-code-scanner'

export default memo((props) => {
  const {
    handleSuccess
  } = props
  const [hasPermission, setHasPermission] = useState(false)
  const [isActive, setIsActive] = useState(true)

  const devices = useCameraDevices()
  const device = devices.back

  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.ALL_FORMATS])

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission()
      setHasPermission(status === 'authorized')
    })()
  }, [])

  useEffect(() => {
    const content = barcodes && barcodes[0] && barcodes[0].content
    if (content && handleSuccess) {
      setIsActive(false)
      handleSuccess(content)
    }
  }, [barcodes, handleSuccess])

  useEffect(() => {
    return () => {
      console.log('[CAMERA] Destroy camera')
    }
  }, [])

  return (
    device != null &&
    isActive &&
    hasPermission && (
      <>
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={isActive}
          frameProcessor={frameProcessor}
          frameProcessorFps={5}
        />
        {barcodes.map((barcode, idx) => (
          <Text key={idx} style={styles.barcodeTextURL}>
            {barcode.displayValue}
          </Text>
        ))}
      </>
    )
  )
})

const styles = StyleSheet.create({
  barcodeTextURL: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  }
})
