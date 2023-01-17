# React Native Template

This project aims to be a strong foundation for react-native applications. It provides a clear and organized structure, core dependencies, and boilerplate to jumpstart development.

## Prerequisites

- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 12](https://developer.apple.com/xcode)
- [Cocoapods 1.10.1](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Base dependencies

- [react-native-vision-camera](https://github.com/mrousavy/react-native-vision-camera) The Camera library that sees the vision.
- [vision-camera-code-scanner](https://github.com/rodgomesc/vision-camera-code-scanner#readme) VisionCamera Frame Processor Plugin to read barcodes using MLKit Vision Barcode Scanning.
- [react-native-permissions](https://github.com/zoontek/react-native-permissions#readme) An unified permissions API for React Native on iOS and Android
- [react-native-fast-image](https://github.com/DylanVann/react-native-fast-image) FastImage, performant React Native image component.
- [axios](https://github.com/axios/axios) for networking.
- [prop-types](https://github.com/facebook/prop-types) to type-check our components exposed properties.
- [react-native-config](https://github.com/luggit/react-native-config) to manage envionments.
- [react-navigation](https://reactnavigation.org/) navigation library.
- [i18n-js](https://github.com/fnando/i18n) for string localization.
- [@react-native-community/async-storage](https://github.com/react-native-async-storage/async-storage#readme) as storage solution.
- [redux](https://redux.js.org/) for state management.
- [react-redux](https://github.com/reduxjs/react-redux) Official React bindings for Redux.
- [redux-persist](https://github.com/rt2zz/redux-persist) as persistance layer.
- [redux-thunk](https://github.com/gaearon/redux-thunk) to dispatch asynchronous actions.
- [redux-actions](https://github.com/redux-utilities/redux-actions) Flux Standard Action utlities for Redux.
- [jest](https://facebook.github.io/jest/) for testing.

## Folder structure

This template follows a very simple project structure:


- `App.js`: Main component that starts your whole app.
- `index.js`: Entry point of your application as per React-Native standards.
- `src`: This folder is the main container of all the code inside your application.
- `navigation`: Folder to store the navigators.
- `pages`: Folder that contains all your application pages/features.
- `modules`: Define one module in the app
    - `containers`: Folder to store any container that you use to wrap the component
    - `components`: Folder to store component that you use through your module
    - `actions.js`: This file contains all actions that can be dispatched to redux.
    - `models.js`: This file contains all the constants used on the module.
    - `reducers.js`: This file should have all your reducers, and expose the combined result
    - `handlers.js`: File to store all your network logic (you should have one handlers per module).

- `utils`: Folder to store all common helpers that uses through your app
- `assets`: Asset folder to store all images, icons, languages files, etc.
- `common/store`: Folder to put all redux middlewares and the store.
- `common/components`: File to store all common component that you use through your app

## Setup environments

### Using scripts from console

The template already has scripts to execute the project calling a specific environment defined into the package.json file. Keep in mind that if you are going to create new `envs` you have to define the script to build the project properly.

To define which env you want to use, just keep the structure `yarn [platform]: [environment]`


DEV: `yarn ios` or `yarn android`

STG: `yarn ios:staging` or `yarn android:staging`

PROD: `yarn ios:prod` o `yarn android:prod`

Also, you can use npm following the same rule as before: `npm run ios:staging`

Modify the environment variables files in root folder (`.env.development`, `.env.production` and `.env.staging`)


#### Android

A map associating builds with env files is already defined in `app/build.gradle` you can modify or add environments if needed.

For multiple enviroments to work you would need to change `-keep class [YOUR_PACKAGE_NAME].BuildConfig { *; }` on `proguard-rules.pro` file.

#### iOS

The basic idea in iOS is to have one scheme per environment file, so you can easily alternate between them.

To create a new scheme:

- In the Xcode menu, go to Product > Scheme > Edit Scheme
- Click Duplicate Scheme on the bottom
- Give it a proper name on the top left. For instance: "qa"
- Then edit the newly created scheme to make it use a different env file. From the same "manage scheme" window:

  Expand the "Build" tab on the left menu
  - Click "Pre-actions", and under the plus sign select "New Run Script Action"
  - Where it says "Type a script or drag a script file", type: `echo ".env.qa" > /tmp/envfile` replacing `.env.qa` with your file.
- Also, you will need to select the executable for the new schema:

  Expand the "Run" tab on the left menu
  - Under the "Executable" dropdown select the ".app" you would like to use for that schema

## Generate production version

These are the steps to generate `.apk`, `.aab` and `.ipa` files

### Android

1. Generate an upload key
2. Setting up gradle variables
3. Go to the android folder
4. Execute `./gradlew assemble[Env][BuildType]`

Note: You have three options to execute the project
`assemble:` Generates an apk that you can share with others.
`install:` When you want to test a release build on a connected device.
`bundle:` When you are uploading the app to the Play Store.

For more info please go to https://reactnative.dev/docs/signed-apk-android

### iOS

1. Go to the Xcode
2. Select the schema
3. Select 'Any iOS device' as target
4. Product -> Archive

For more info please go to https://reactnative.dev/docs/publishing-to-app-store

## Styleguide

For coding styling, we decided to go with ESLint and [JavaScript Standard Style](https://standardjs.com).
