import React, { Component, PropTypes } from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import { handleSocket } from '../actions'
import { connect } from 'react-redux'
import './AppContainer.scss'

class AppContainer extends Component {
  static propTypes = {
    routes : PropTypes.array.isRequired,
    store  : PropTypes.object.isRequired
  }
  constructor (props) {
    super(props)
    props.handleSocket()
  }
  shouldComponentUpdate () {
    return false
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
    handleSocket: (event) => {
      dispatch(handleSocket(event))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)

