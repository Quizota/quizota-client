import { injectReducer } from '../../store/reducers'

import Game from './components/Game'

export default (store) => ({
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
     and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
       dependencies for bundling   */
      const Game = require('./containers/GameContainer').default

      /*  Return getComponent   */
      cb(null, Game)

      /* Webpack named bundle   */
    }, 'game')
  }
})
