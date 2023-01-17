import { Platform } from 'react-native'
import Permissions from 'react-native-permissions'

export default {
  CAMERA_ROLL: 'CAMERA_ROLL',
  CAMERA: 'CAMERA',
  PermissionStatus: {
    GRANTED: 'granted',
    DENIED: 'denied',
    UNDETERMINED: 'undetermined'
  },
  getAsync: (name) => {
    let permission = name
    switch (name) {
      case 'CAMERA':
        permission = Platform.select({
          android: Permissions.PERMISSIONS.ANDROID.CAMERA,
          ios: Permissions.PERMISSIONS.IOS.CAMERA
        })
        break
      case 'CAMERA_ROLL':
        permission = Platform.select({
          android: Permissions.PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
          ios: Permissions.PERMISSIONS.IOS.PHOTO_LIBRARY
        })
        break
    }

    return Permissions.check(permission).then(response => {
      if (response === Permissions.RESULTS.GRANTED) {
        return {
          status: 'granted',
          granted: true,
          expires: 'never',
          canAskAgain: true
        }
      } else if (response === Permissions.RESULTS.DENIED) {
        return {
          status: 'denied',
          granted: false,
          expires: 'never',
          canAskAgain: true
        }
      } else if (response === Permissions.RESULTS.BLOCKED) {
        return {
          status: 'denied',
          granted: false,
          expires: 'never',
          canAskAgain: false
        }
      }
      return {
        status: 'undetermined',
        granted: false,
        expires: 'never',
        canAskAgain: true
      }
    })
  },
  askAsync: (name) => {
    let permission = name
    switch (name) {
      case 'CAMERA':
        permission = Platform.select({
          android: Permissions.PERMISSIONS.ANDROID.CAMERA,
          ios: Permissions.PERMISSIONS.IOS.CAMERA
        })
        break
      case 'CAMERA_ROLL':
        permission = Platform.select({
          android: Permissions.PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
          ios: Permissions.PERMISSIONS.IOS.PHOTO_LIBRARY
        })
        break
    }
    return Permissions.request(permission).then(response => {
      if (response === Permissions.RESULTS.GRANTED) {
        return {
          status: 'granted',
          granted: true,
          expires: 'never',
          canAskAgain: true
        }
      } else if (response === Permissions.RESULTS.DENIED) {
        return {
          status: 'denied',
          granted: false,
          expires: 'never',
          canAskAgain: true
        }
      } else if (response === Permissions.RESULTS.BLOCKED) {
        return {
          status: 'denied',
          granted: false,
          expires: 'never',
          canAskAgain: false
        }
      }
      return {
        status: 'undetermined',
        granted: false,
        expires: 'never',
        canAskAgain: true
      }
    })
  }
}
