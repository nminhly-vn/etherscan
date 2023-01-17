// eslint-disable-next-line no-underscore-dangle
global.__reanimatedWorkletInit = jest.fn()

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock')

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => { }

  return Reanimated
})

jest.mock('@react-native-community/async-storage', () => {
  return {
    getItem: async (...args) => args,
    setItem: async (...args) => args,
    removeItem: async (...args) => args
  }
})

// jest.mock('redux-persist', () => {
//   const real = jest.requireActual('redux-persist')
//   return {
//     ...real,
//     persistReducer: jest
//       .fn()
//       .mockImplementation((config, reducers) => reducers),
//   }
// })

// jest.mock('./src/common/store', () => ({
//   store: {
//     getState: () => ({
//       appSettings: {
//         language: 'en'
//       }
//     }),
//     subscribe: jest.fn(),
//     dispatch: jest.fn()
//   }
// }))

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn()
}))

jest.mock('@react-navigation/bottom-tabs', () => ({
  BottomTabBar: jest.fn(),
  createBottomTabNavigator: jest.fn()
}))

jest.mock('react-native-permissions', () => ({}))

jest.mock('axios', () => ({}))

jest.mock('react-native-vision-camera', () => ({}))


const mock = jest.requireMock('react-native-reanimated')

jest.mock('react-native-reanimated', () => ({
  ...mock,
  useSharedValue: jest.fn().mockReturnValue(0),
  useAnimatedStyle: jest.fn().mockReturnValue({}),
  createAnimatedComponent: component => jest.fn().mockReturnValue(component),
  __reanimatedWorkletInit: jest.fn(),
  Extrapolate: { CLAMP: jest.fn() }
}))
