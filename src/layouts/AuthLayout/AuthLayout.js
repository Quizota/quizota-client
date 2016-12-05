import React from 'react'
import Footer from '../../components/Footer'
import './AuthLayout.scss'

class AuthLayout extends React.Component {
  componentWillMount () {
    document.body.classList.add('page-auth')
  }

  componentWillUnmount () {
    document.body.classList.remove('page-auth')
  }

  render () {
    return (
      <div>
        <div className='OneColumnLayout'>
          <div className='core-layout__viewport'>
            {this.props.children}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default AuthLayout
