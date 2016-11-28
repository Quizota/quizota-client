import React, {Component} from 'react'
import DocumentTitle from 'react-document-title'
import {connect} from 'react-redux'
import Form from '../../../commons/Form'
import {registerRequest} from '../../../actions'
const io = require('socket.io-client');
var socket = io('http://localhost:8000/');
socket.on('connect', function(){
    console.log('Thông báo: Đã kết nối đến máy chủ trò chơi')
});
socket.on('event', function(data){
    console.log('Dữ liệu', data)
});
socket.on('disconnect', function(){
    console.log('Thông báo: Chấm dứt kết nối với máy chủ trò chơi')
});
class AuthView extends Component {
    constructor(props) {
        super(props);

        this._register = this._register.bind(this)
    }

    render() {
        let {dispatch} = this.props;
        let {formState, currentlySending, error} = this.props.data.authFormReducer;
        console.log(formState);
        return (
            <div className='auth-block auth-block__register'>
                <Form data={formState} dispatch={dispatch} history={this.props.history} onSubmit={this._register}
                      btnText={'Bắt đầu trò chơi'} error={error} currentlySending={currentlySending}/>
            </div>
        )
    }

    _register(username, password) {
        this.props.dispatch(registerRequest({username, password}))
    }
}

// AuthView.propTypes = {
//     data: React.PropTypes.object,
//     history: React.PropTypes.object,
//     dispatch: React.PropTypes.func
// }

// Which props do we want to inject, given the global state?
function select(state) {
    return {
        data: state
    }
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(AuthView)
