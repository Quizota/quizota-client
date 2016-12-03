import React, {Component} from 'react'

class Number extends Component{
    constructor(props, context){
        super(props, context)

        this.handleSelected = this.handleSelected.bind(this)

        this.state = {selected: false}    
    }


    handleSelected(){        
        this.props.socket.emitData('data', { "cmd": "syncGameData", "data": {"cmd": "gameAction", "data": { "pickNumber": this.props.number} } })
    }

    changeSelected(){
        this.setState({selected: true})
    }

    renderNormal(){
        return(
            <li onClick={this.handleSelected} key={"li_"+this.props.number}>
                <span key={"number_"+this.props.number}>
                    {this.props.number}
                </span> 
            </li>           
        )
    }
    
    renderSelected(){
        return(
            <li className="selected" key={"li_"+this.props.number}>
                <span key={"number_"+this.props.number}>
                    {this.props.number}
                </span>
            </li>
        )
    }

    render(){
        if(!this.state.selected){
            return this.renderNormal()
        } else {
            return this.renderSelected()
        }
    }
}

module.exports = Number