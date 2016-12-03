import React, {Component} from 'react'

class User extends Component {
    constructor(props, context){
        super(props, context)

        this.state = { style: {float: this.props.float}    
                     }
    }

    render(){
        return(
            <div className="col-md-4">
                <div className="div__userAvatar" style={this.state.style}>
                    <img src={this.props.user.avatar}/>
                </div>
                <div className="div__currentInfo">
                    <p className="p__userName">Khanh</p>
                    <p className="userAttribute__item__elo">Score: {this.props.score}</p>
                </div>
            </div>            
        )
    }
}
// <p className="p__userName">{this.props.user.displayName}</p>

module.exports = User