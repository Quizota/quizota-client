// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import OneColumnLayout from  '../layouts/OneColumnLayout/OneColumnLayout'
import AuthLayout from '../layouts/AuthLayout/AuthLayout'
import createQZTMiddleware from 'redux-saga'
import {createStore, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import {Provider} from 'react-redux'

import Home from './Home'
import IntroRoute from './Intro'
import DashboardRoute from './Dashboard'
import GameRoute from './Game'
import AuthRoute from './AuthMain'
import SettingRoute from './Setting'
import ScoreRoute from './Score'
import CounterRoute from './Counter'
import {clearError} from '../actions'
import {store} from '../main'

import socket from '../SocketIO'
let users
let localStorage

// If we're testing, use a local storage polyfill
if (global.process && process.env.NODE_ENV === 'test') {
  localStorage = require('localStorage')
} else {
  // If not, use the browser one
  localStorage = global.window.localStorage
}
users = JSON.parse(localStorage.users)

/*  Note: Instead of using JSX, we recommend using react-router
 PlainRoute objects to build route definitions.   */

export const connectToSocket = (store) => (
  socket.connectSocket('connect@token')
)
function checkAuth(nextState, replace) {
  let {loggedIn} = store.getState().auth
  store.dispatch(clearError())
  // Check if the path isn't dashboard. That way we can apply specific logic to
  // display/render the path we want to
  if (loggedIn) {

  } else {
    if(nextState.location.pathname !== '/auth') {
      replace('/intro')
    }
  }
}

export const createRoutes = (store) => ([
  {
    path: '/',
    onEnter: checkAuth,
    component: CoreLayout,
    indexRoute: DashboardRoute,
    childRoutes: [
      CounterRoute(store)
    ]
  },
  {
    path: '/intro',
    component: AuthLayout,
    indexRoute: IntroRoute,
    childRoutes: []
  },
  {
    path: '/auth',
    component: AuthLayout,
    indexRoute: AuthRoute,
    childRoutes: []
  },
  {
    path: '/setting',
    component: OneColumnLayout,
    indexRoute: SettingRoute,
    childRoutes: []
  },
  {
    path: '/dashboard',
    onEnter: checkAuth,
    component: CoreLayout,
    indexRoute: DashboardRoute,
  },
  {
    path: 'game',
    onEnter: checkAuth,
    component: CoreLayout,
    indexRoute: GameRoute(store),
    childRoutes: []
  },
  {
    path: 'score',
    onEnter: checkAuth,
    component: CoreLayout,
    indexRoute: ScoreRoute(store),
    childRoutes: []
  },
  {
    path: 'rankings',
    onEnter: checkAuth,
    component: CoreLayout,
    indexRoute: GameRoute(store),
    childRoutes: []
  },
  {
    path: 'game/:gameId',
    onEnter: checkAuth,
    component: CoreLayout,
    indexRoute: GameRoute(store),
    childRoutes: []
  }
])

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
 using getChildRoutes with the following signature:

 getChildRoutes (location, cb) {
 require.ensure([], (require) => {
 cb(null, [
 // Remove imports!
 require('./Counter').default(store)
 ])
 })
 }

 However, this is not necessary for code-splitting! It simply provides
 an API for async route definitions. Your code splitting should occur
 inside the route `getComponent` function, since it is only invoked
 when the route exists and matches.
 */

export default createRoutes
