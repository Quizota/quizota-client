import React from 'react'
import Header from '../../components/Header'
import AuthLayoutCss from './AuthLayout.scss'


class AuthLayout extends React.Component {
  componentWillMount() {
    document.body.classList.add("page-auth")
  }
  componentWillUnmount() {
    document.body.classList.remove("page-auth")
  }
  render() {
    return <div className="OneColumnLayout">
    <Header />
    <div className='core-layout__viewport'>
          {this.props.children}
    </div>
  </div>
  }
}
export  default  AuthLayout
