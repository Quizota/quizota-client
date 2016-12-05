import React from 'react'
import Footer from '../../components/Footer'
import Sidebar from '../../components/Sidebar'
import './CoreLayout.scss'
import '../../styles/core.scss'

class CoreLayout extends React.Component {

  componentDidMount () {
  }
  render () {
    return (
      <div>
        <div className='core-layout__viewport'>
          <div className='dashboard'>
            <div className='container-fluid'>
              <Sidebar />
              {this.props.children}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default CoreLayout
