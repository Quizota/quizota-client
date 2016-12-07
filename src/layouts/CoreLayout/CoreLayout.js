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
        <div id='usualLoader' style={this.props.usualLoaderCSS} className='opaque'>
          <div className='wrap-process'>
            <span className='global-bar'>
              <bar className='a1 bar' />
              <bar className='a2 bar' />
              <bar className='b1 bar' />
              <bar className='b2 bar' />
              <bar className='c1 bar' />
              <bar className='c2 bar' />
              <bar className='d1 bar' />
              <bar className='d2 bar' />
              <bar className='e1 bar' />
              <bar className='e2 bar' />
              <bar className='f1 bar' />
              <bar className='f2 bar' />
            </span>
            <p>Đang tải...</p>
          </div>
        </div>
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
