
import I18n from 'i18n-js'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { formatEtherAddress, formatCrypto } from '../../../utils/crypto'
import FastImage from 'react-native-fast-image'

const iconEth = require('../../../assets/images/eth.png')

const WatchListItem = (props) => {
  const { item } = props
  return (
    <View style={styles.wrapper_container}>
      <View style={[styles.container, styles.shadow]}>
        <View style={styles.line}>
          <FastImage
            style={styles.image}
            source={{
              uri: item.image,
              priority: FastImage.priority.low
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
          <Text style={[styles.title, styles.token_address, styles.text_left]}>{formatEtherAddress(item.address)}</Text>
          <Text style={[styles.percent, styles.text_right, styles.up_trend]}>
            {item.price}
          </Text>
        </View>
        <View style={[styles.value_row]}>
          <View style={styles.value_row_line}>
            <Text style={[styles.title, styles.text_left]}>{I18n.t('watchlist.value_in_eth')}</Text>
            <View style={styles.balance_wrapper}>
              <FastImage
                style={styles.coin}
                source={iconEth}
                resizeMode={FastImage.resizeMode.contain}
              />
              <Text style={[styles.value, styles.text_left]}>{formatCrypto(item.balance, 4) || 0}</Text>
            </View>
          </View>
          <View style={[styles.divider_horizaltal]} />
          <View style={styles.value_row_line}>
            <Text style={[styles.title, styles.text_left]}>{I18n.t('watchlist.value_in_usd')}</Text>
            <Text style={[styles.value, styles.text_left]}>{'$ ' + formatCrypto(item.balanceInUSD, 2) || 0}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default WatchListItem

const styles = StyleSheet.create({
  wrapper_container: {
    flex: 1,
    margin: 10
  },
  container: {
    borderWidth: 1,
    borderColor: '#DFE9F5',
    borderRadius: 4,
    backgroundColor: '#FFFFFF'
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
  line: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  value_row: {
    flexDirection: 'row',
    backgroundColor: '#ecf0f6',
    margin: 10,
    borderRadius: 5
  },
  value_row_line: {
    flex: 1,
    alignItems: 'flex-start',
    margin: 10
  },
  divider_horizaltal: {
    backgroundColor: '#FFFFFF',
    width: 1
  },
  text_center: {
    textAlign: 'center'
  },
  text_left: {
    textAlign: 'left'
  },
  text_right: {
    textAlign: 'right'
  },
  token_address: {
    flex: 1,
    fontSize: 16,
    color: '#253552',
    marginLeft: 10
  },
  percent: {
    maxWidth: 80,
    color: '#FFFFFF',
    borderRadius: 5,
    padding: 5
  },
  up_trend: {
    backgroundColor: '#dd4537'
  },
  down_trend: {
    backgroundColor: 'green'
  },
  title: {
    fontSize: 16,
    color: 'gray',
    textTransform: 'uppercase',
    marginVertical: 5
  },
  value: {
    fontSize: 16,
    color: '#253552'
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  coin: {
    width: 20,
    height: 20,
    borderRadius: 20
  },
  balance_wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%'
  },
  balance: {
    marginHorizontal: 5,
    fontSize: 18
  }
})
