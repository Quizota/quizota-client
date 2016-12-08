import React, { Component, PropTypes } from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import { listener } from '../actions'
import { connect } from 'react-redux'
import './AppContainer.scss'
import { attachListener, emitData } from '../SocketIO'
import NProgress from 'nprogress'

class AppContainer extends Component {
  static propTypes = {
    routes : PropTypes.array.isRequired,
    store  : PropTypes.object.isRequired
  }
  constructor (props) {
    super(props)
  }
  componentDidMount () {
    emitData('data', { 'cmd': 'getMyInfo', 'data': {} })
  }
  componentWillUnmount () {

  }
  shouldComponentUpdate () {
    return false
  }
  componentWillMount () {
    this.props.init()
  }

  render () {
    const { routes, store } = this.props
    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
          <Router history={browserHistory} children={routes} />
        </div>
      </Provider>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    mapPicker: state.mapPicker
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    init: () => dispatch(attachListener(listener))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)

