import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ExplorerPage from '../pages/Explorer'
import WatchlistPage from '../pages/Watchlist'
import FavoritePage from '../pages/Favorite'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'
import I18n from 'i18n-js'

const Tab = createBottomTabNavigator()

function MyTabs () {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={I18n.t('page.explorer')}
        component={ExplorerPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='explore' color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name={I18n.t('page.watchlist')}
        component={WatchlistPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name='list' color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name={I18n.t('page.favourite')}
        component={FavoritePage}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Fontisto name='favorite' color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default function AppNavigator () {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  )
}
