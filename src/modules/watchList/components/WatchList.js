
import I18n from 'i18n-js'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Text, View, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import Camera from '../../../common/components/Camera'
import WatchListItem from './WatchListItem'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { wait } from '../../../utils/effect'

const WatchListItemComponent = (props) => {
  const {
    item
  } = props
  return (
    <WatchListItem
      key={item.address}
      item={item}
    />
  )
}

const Watchlist = (props) => {
  const {
    watchlist,
    addWatchlist
  } = props
  const [results, setResults] = useState([])

  useEffect(() => {
    const data = Object.keys(watchlist).map((item, index) => {
      return watchlist[item]
    })
    setResults(data)
  }, [watchlist])

  const handleAddMore = useCallback(async () => {
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
      } catch (err) {
      }
    })
  }, [])

  const handleKeyExtractor = useCallback((item, index) => {
    return `${item.address}_${index}`
  }, [])

  const EmptyContainer = useCallback(() => {
    return <Text style={[styles.title, styles.center]}>{I18n.t('watchlist.your_watchlist_empty')}</Text>
  }, [])

  const ListHeaderComponent = useCallback(() => {
    return <Text style={styles.title}>{I18n.t('watchlist.your_watchlist')}</Text>
  }, [])

  const ListFooterComponent = useCallback(() => {
    return (
      <TouchableOpacity
        disabled={disabled}
        onPress={handleAddMore}
        style={[
          styles.button,
          styles.shadow,
          disabled
            ? styles.disabled
            : {}
        ]}
      >
        <Text style={styles.button_text}>{I18n.t('watchlist.add_address_to_watchlist')}</Text>
        <View>
          <AntDesign
            name='pluscircleo'
            size={20}
            style={[
              styles.button_icon,
              disabled
                ? styles.disabled
                : {}
            ]}
          />
        </View>
      </TouchableOpacity>
    )
  }, [])

  const disabled = useMemo(() => {
    return results && results.length >= 3
  }, [results])

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={ListHeaderComponent}
        data={results}
        renderItem={WatchListItemComponent}
        keyExtractor={handleKeyExtractor}
        ListEmptyComponent={EmptyContainer()}
        ListFooterComponent={ListFooterComponent}
      />
    </View>
  )
}

export default Watchlist

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10
  },
  button: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 15,
    backgroundColor: '#004ddc',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  disabled: {
    backgroundColor: 'gray'
  },
  button_text: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 16
  },
  button_icon: {
    width: 40,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  title: {
    margin: 15,
    fontSize: 16,
    color: '#253552',
    fontWeight: 'bold'
  },
  center: {
    textAlign: 'center'
  }
})
