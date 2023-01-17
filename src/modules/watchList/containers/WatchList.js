import { connect } from 'react-redux'
import WatchList from '../components/WatchList'
import handlers from '../handlers'

const mapDispatchToProps = (dispatch, props) => ({
  ...handlers(dispatch, props)
})

const mapStateToProps = (state, props) => {
  return {
    watchlist: state.watchlist.watchlist
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WatchList)
