import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div>
    <Header />
    <div className='core-layout__viewport'>
      <div className="dashboard">
        <div className="container-fluid">
          <Sidebar />
          {children}
          </div>
        </div>

    </div>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
