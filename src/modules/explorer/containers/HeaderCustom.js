import { connect } from 'react-redux'
import HeaderCustom from '../components/HeaderCustom'
import handlers from '../handlers'
import watchListHandlers from '../../watchList/handlers'

const mapDispatchToProps = (dispatch, props) => ({
  ...handlers(dispatch, props),
  ...watchListHandlers(dispatch, props)
})

const mapStateToProps = (state, props) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderCustom)
