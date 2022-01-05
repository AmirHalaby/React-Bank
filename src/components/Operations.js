import React, { Component } from 'react';
import '../styles/Operations.css';
import { BrowserRouter as Router, Route ,Link } from 'react-router-dom'


class Operations extends Component {
    constructor() {
        super();    
        this.state ={
            Amount  :0 ,
            Vendor  : "NaN",
            Category: "NaN"
    
        }
    }

  
    
    onAmountchange =(event) => {
        this.setState({Amount :  event.target.value})
        console.log(this.state.Amount);
    }   

    onVendorchange =(event) => {
        this.setState({Vendor :  event.target.value})
        console.log(this.state.Vendor);
        
    }

    onCategorychange =(event) => {
        this.setState({Category :  event.target.value})
        console.log(this.state.Category);
        
    }
    
    Deposit =() => {
        const obj ={
            amount : this.state.Amount ,
            vendor : this.state.Vendor,
            category : this.state.Category
        }
     
        this.props.createNewTranscations(obj)
    }
    Withdraw  =() => {
        const obj ={
            amount : this.state.Amount*(-1) ,
            vendor : this.state.Vendor,
            category : this.state.Category
        }
     
        this.props.createNewTranscations(obj)
    }
    render() {
        return (
            <div>
                <label>
                    Amount : 
                    <input
                    name="Amount"
                    type="text"
                    value={this.state.Amount}
                    onChange={this.onAmountchange}
                />
                </label>
                <br/> <br/>
                <label>
                    Vendor : 
                    <input
                    name="Vendor"
                    type="text"
                    value={this.state.Vendor}
                    onChange={this.onVendorchange}
                    />
                </label>
                <br/><br/>
                <label>
                    Category : 
                    <input
                    name="Category"
                    type="text"
                    value={this.state.Category}
                    onChange={this.onCategorychange}
                    />
                </label>
                <br/><br/>
                <Link to="/Transcations" onClick={this.Deposit}>Transcations</Link>
                <button className='button-3' onClick={this.Deposit}>Deposit</button>
                <button className='button-1' onClick={this.Withdraw}>Withdraw </button>
                <br/><br/>
            </div>
        );
    }
}

export default Operations;