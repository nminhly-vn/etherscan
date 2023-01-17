
import React, { useState, useEffect, useRef, useCallback, memo } from 'react'
import { View, TextInput, FlatList, StyleSheet } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

import I18n from 'i18n-js'
import ResultDetail from './ResultDetail'
import WelcomeScreen from './Welcome'
import SearchResults from './SearchResults'

const DELAY_REQUEST = 200

const Explorer = memo((props) => {
  const {
    getTokenInfo,
    getTokenList
  } = props
  const [term, setTerm] = useState('')
  const [data, setData] = useState()
  const [isDisplayWelcome, setIsDisplayWelcome] = useState(true)
  const [showDetail, setShowDetail] = useState(false)
  const [itemSelected, setItemSelected] = useState(false)
  const timeout = useRef(null)

  const handleGetTokenList = useCallback(async (term) => {
    const response = await getTokenList({
      term
    })
    setData(response || [])
  }, [])

  useEffect(() => {
    if (!term) {
      setIsDisplayWelcome(true)
      setData(null)
    } else {
      // Clear timeout if it has been set
      if (timeout.current) {
        clearTimeout(timeout.current)
      }
      timeout.current = setTimeout(() => {
        setIsDisplayWelcome(false)
        setItemSelected(null)
        handleGetTokenList(term)
      }, DELAY_REQUEST)
    }
  }, [term])

  const SearchResultsComponent = ({ item }) => {
    return (
      <SearchResults
        item={item}
        handleCallback={() => {
          setItemSelected(item)
          setShowDetail(true)
        }}
      />
    )
  }

  const handleKeyExtractor = useCallback((item, index) => {
    return `${item.value}_${index}`
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.search_box}>
        <AntDesign
          name='search1'
          size={20}
          style={styles.search_icon}
        />
        <TextInput
          placeholder={I18n.t('explorer.search_placeholder')}
          value={term}
          onChangeText={text => setTerm(text)}
          style={styles.search_input}
        />
      </View>
      {
        isDisplayWelcome || !term
          ? (
            <WelcomeScreen />
            )
          : (
              showDetail && itemSelected
                ? (
                  <ResultDetail
                    item={itemSelected}
                    getTokenInfo={getTokenInfo}
                  />
                  )
                : (
                  <FlatList
                    data={data}
                    renderItem={SearchResultsComponent}
                    keyExtractor={handleKeyExtractor}
                  />
                  )

            )
      }
    </View>
  )
})

export default Explorer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  search_box: {
    height: 40,
    borderColor: '#DFE9F5',
    borderWidth: 1,
    flexDirection: 'row',
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#e4e6ea'
  },
  search_icon: {
    width: 25,
    height: 25,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  search_input: {
    flex: 1,
    paddingLeft: 10
  }
})
