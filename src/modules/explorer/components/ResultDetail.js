
import I18n from 'i18n-js'
import React, { useState, useEffect, memo } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import RenderHTML from 'react-native-render-html'
import FastImage from 'react-native-fast-image'

const width = 100

const ResultDetail = memo((props) => {
  const {
    item,
    getTokenInfo
  } = props
  const [resultDetail, setResultDetail] = useState({})
  const { value, typeval } = item

  useEffect(() => {
    const fetchResultDetail = async () => {
      const data = await getTokenInfo({
        address: value,
        type: typeval
      })
      setResultDetail(data || {})
    }
    fetchResultDetail()
  }, [value, typeval])
  const source = {
    html: resultDetail.price,
    style: styles.value
  }
  return (
    <View style={styles.wrapper_container}>
      <View style={[styles.container, styles.shadow]}>
        <View style={[styles.line, styles.image_wrapper, styles.shadow]}>
          <FastImage
            style={styles.image}
            source={{
              uri: resultDetail.image,
              priority: FastImage.priority.low
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        <View style={styles.line}>
          <Text style={[styles.title, styles.token_name, styles.text_center]}>{resultDetail.name}</Text>
          <Text style={[styles.title, styles.text_center]}>{item.desc} ({I18n.t('explorer.erc20')})</Text>
        </View>
        <View style={[styles.divider]} />
        <View style={[styles.part_column]}>
          <View style={styles.row_line}>
            <Text style={[styles.title, styles.text_center]}>{I18n.t('explorer.price')}</Text>
            <Text style={[styles.value, styles.text_center]}>
              {resultDetail && resultDetail.price
                ? (
                  <RenderHTML
                    contentWidth={width}
                    source={source}
                  />
                  )
                : null}
            </Text>
          </View>
          <View style={[styles.divider_horizaltal]} />
          <View style={styles.row_line}>
            <Text style={[styles.title, styles.text_center]}>{I18n.t('explorer.market_cap')}</Text>
            <Text style={[styles.value, styles.text_center]}>{resultDetail.marketcap}</Text>
          </View>
        </View>
        <View style={styles.space_around}>
          <View style={[styles.divider]} />
          <View style={styles.line}>
            <Text style={[styles.title]}>{I18n.t('explorer.total_supply')}</Text>
            <Text style={styles.value}>{resultDetail.totalSupply || 0}</Text>
          </View>
          <View style={[styles.divider]} />
          <View style={styles.line}>
            <Text style={[styles.title]}>{I18n.t('explorer.contract')}</Text>
            <Text style={styles.value}>{resultDetail.address}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={[styles.button, styles.shadow]}
      >
        <Text style={styles.button_text}>{I18n.t('explorer.view_more')}</Text>
      </TouchableOpacity>
    </View>
  )
})

export default ResultDetail

const styles = StyleSheet.create({
  wrapper_container: {
    flex: 1,
    marginTop: 25
  },
  container: {
    margin: 10,
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
    paddingHorizontal: 5
  },
  part_column: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingVertical: 10
  },
  row_line: {
    flex: 1,
    alignItems: 'center'
  },
  divider_horizaltal: {
    backgroundColor: '#DFE9F5',
    width: 1
  },
  divider: {
    backgroundColor: '#DFE9F5',
    height: 1,
    width: '100%'
  },
  space_around: {
    marginHorizontal: 20
  },
  text_center: {
    textAlign: 'center'
  },
  token_name: {
    fontSize: 18,
    color: '#747474'
  },
  title: {
    fontSize: 18,
    color: 'gray',
    textTransform: 'uppercase',
    marginVertical: 5
  },
  value: {
    fontSize: 15,
    color: '#939393'
  },
  image_wrapper: {
    borderWidth: 1,
    borderColor: '#DFE9F5',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 30,
    top: -30,
    backgroundColor: '#FFFFFF'
  },
  image: {
    flex: 1,
    margin: 5
  },
  button: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 15,
    backgroundColor: '#004ddc',
    borderRadius: 5
  },
  button_text: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 16
  }
})
