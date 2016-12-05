import React from 'react'
import Header from '../../components/Header'
import './OneColumnLayout.scss'
import '../../styles/core.scss'

export const OneColumnLayout = ({ children }) => (
  <div className='OneColumnLayout'>
    <Header />
    <div className='core-layout__viewport'>
      {children}
    </div>
  </div>
)

OneColumnLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default OneColumnLayout
