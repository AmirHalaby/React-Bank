import React, { Component } from 'react';
import './App.css';
import Operations from './components/Operations';
// import { BrowserRouter as Router, Route ,Link } from 'react-router-dom'
import Transcations from './components/Transcations';
import axios from 'axios';
import { BrowserRouter as Router, Route ,Link } from 'react-router-dom'

export class App extends Component {

  constructor() {
    super()
    this.DBUrl = "http://localhost:4002"
    this.state = {
      Transcations: 
      [],
      totalAmount : null 
    }
  }

  getSum = () => {
    let Transcations = this.state.Transcations
    let totalAmount = 0 
    for (const Transcation of Transcations) {
      totalAmount = totalAmount + Transcation.amount
    } 
    this.setState({totalAmount})
  }

  async getTransactions() {
    return   axios.get(this.DBUrl + '/transactions');
  }

  async postTransactions(transaction) {
    return await  axios.post(this.DBUrl + '/transaction',{
      amount : transaction.amount ,
      category :transaction.category ,
      vendor : transaction.vendor
     }); 
  }

  async componentDidMount() {
    console.log("componentDidMount");
    const response = await this.getTransactions()
    this.setState({ Transcations: response.data })
    this.getSum()
  }

  createNewTranscations = async (obj) => {
    const response = await this.postTransactions(obj)
    let tempTranscation = [...this.state.Transcations]
    tempTranscation.push(response.data)  
    this.setState({ Transcations : tempTranscation})
    this.getSum()
  }

  deleteTranscation = async (transcationid) => {
    axios.delete(this.DBUrl + `/transaction/${transcationid}`,{ id : transcationid}); 
    let tempTranscation = [...this.state.Transcations]
    for (let i = 0; i < tempTranscation.length; i++) {
      if (transcationid == tempTranscation[i]._id) 
        tempTranscation.splice(i,1);      
    }
    this.setState({ Transcations : tempTranscation})
    this.getSum()
  }
  render() {
    return (
      <Router>

      <div className="app">
      <Route path="/" exact render={() =>           <Operations  createNewTranscations={this.createNewTranscations}/>}/>
      <Route path="/Transcations" exact render={() =>          <Transcations totalAmount={this.state.totalAmount} Transcations={this.state.Transcations} deleteTranscation={this.deleteTranscation} /> } />
      </div>
      </Router>
    )
  }
}

