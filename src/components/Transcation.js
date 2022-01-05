import React, { Component } from 'react';
import '../styles/Transcation.css';


class Transcation extends Component {
    constructor(){
        super() 
 
    }
    deleteTranscationById =() =>  {
        this.props.deleteTranscation(this.props.transcation._id)
    }
    render() {
        return (
            <div>
                <span>{this.props.transcation.vendor} | </span>
                <span>{this.props.transcation.amount} | </span>
                <span>{this.props.transcation.category} </span>
                <button className="button-45" role="button" onClick={this.deleteTranscationById}>DELETE</button>               
                <br/>
                <hr/>
                <br/>
            </div>
        );
    }
}

export default Transcation;