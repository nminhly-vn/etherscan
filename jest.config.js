module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.(js)$': 'babel-jest'
  },
  collectCoverage: false,
  coverageDirectory: './test/coverage/',
  coverageReporters: ['html', 'text-summary'],
  collectCoverageFrom: [
    './src/**/*.{ts,tsx,js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/amplify/**'
  ],
  coverageThreshold: {
    global: {
      statements: 1 // 1% better than 0
    }
  },
  testPathIgnorePatterns: ['/node_modules/', '/e2e/'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native(-.*)?|@react-native(-community)?|redux-persist)/)',
    '/e2e/'
  ]
}
