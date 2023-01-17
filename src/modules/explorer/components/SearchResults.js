
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import FastImage from 'react-native-fast-image'

const SearchResults = ({
  item,
  handleCallback
}) => {
  return (
    <View style={styles.container_wrapper}>
      <TouchableOpacity
        onPress={handleCallback}
        style={styles.container}
      >
        <View style={styles.logo_wrapper}>
          <FastImage
            style={styles.logo}
            source={{
              uri: item.logo,
              priority: FastImage.priority.low
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.token_name} numberOfLines={1}>{item.label}</Text>
          <Text style={styles.token_description}>{item.desc}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default SearchResults

const styles = StyleSheet.create({
  container_wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 5
  },
  logo_wrapper: {
    width: 50,
    alignSelf: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 30,
    height: 30
  },
  content: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#DFE9F5',
    flexDirection: 'column',
    paddingVertical: 10,
    marginHorizontal: 15
  },
  token_name: {
    fontSize: 16
  },
  token_description: {
  }
})
