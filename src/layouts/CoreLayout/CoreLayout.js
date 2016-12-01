import React from 'react'
import Footer from '../../components/Footer'
import Sidebar from '../../components/Sidebar'
import './CoreLayout.scss'
import '../../styles/core.scss'
import Socket from '../../SocketIO'

class CoreLayout extends React.Component {

  componentDidMount() {
    Socket.emitData('dddd')
  }
  render() {
    return (
      <div>
        <div className='core-layout__viewport'>
          <div className="dashboard">
            <div className="container-fluid">
              <Sidebar />
              {this.props.children}
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}

export default CoreLayout
