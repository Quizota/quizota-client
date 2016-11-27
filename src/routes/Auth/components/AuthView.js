import React from 'react'
import './AuthView.scss'

class AuthView extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="login-block">
          <h3>Chào mừng đến với Quizota</h3>
          <form action="">
            <input type="text" className="form-control" placeholder="Tên của bạn" autoFocus></input><br/>
            <button className="btn btn-qzt_brand">Bắt đầu chơi</button>
          </form>
        </div>
      </div>
    )
  }
}

export default AuthView
