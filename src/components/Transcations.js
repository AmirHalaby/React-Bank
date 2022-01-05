import React, { Component } from 'react';
import Transcation from './Transcation';


class Transcations extends Component {
    constructor(){
        super()
       
    }
    
    render() {
        return (
            <div> 
                        <div>{this.props.totalAmount}</div>
                {this.props.Transcations.map((c,i) =>
                    <div key={i} >
                        <h1>{i}</h1>
                        <Transcation transcation={c} key={i} deleteTranscation={this.props.deleteTranscation} />
                    </div>
                )}
            </div>
        );
    }
}

export default Transcations;