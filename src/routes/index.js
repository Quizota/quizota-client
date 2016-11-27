// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import OneColumnLayout from  '../layouts/OneColumnLayout/OneColumnLayout'
import AuthLayout from '../layouts/AuthLayout/AuthLayout'
import Home from './Home'
import IntroRoute from './Intro'
import DashboardRoute from './Dashboard'
import GameRoute from './Game'
import AuthRoute from './Auth'
import SettingRoute from './Setting'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ([
  {
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,
  childRoutes : [
    IntroRoute(store),
    GameRoute(store)
  ]},
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
    component: CoreLayout,
    indexRoute: DashboardRoute(store),
    childRoutes: [
      GameRoute(store)
    ]
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
