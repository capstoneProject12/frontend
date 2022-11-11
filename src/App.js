import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Header from "./components/header/Header";
import ApplyLoan from './components/ApplyLoan';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import LoanCardsAvailed from './components/LoanCardsAvailed';
import ItemsPurchased from './components/ItemsPurchased';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      page: [],
      dashboard: []
    }
  }
  render() {
    return (
      <div className="App">

        <BrowserRouter>
        
          <Header title="Loan User Management Application" />
          <Routes>
            <Route exact path="/" element={<Login />}></Route>
            <Route path="/register" element={<Register />} ></Route>
            <Route path="/applyloan" element={<ApplyLoan />} ></Route>
            <Route path="/home" element={<Dashboard />} ></Route>
            <Route path="/loans" element={<LoanCardsAvailed />} ></Route>
            <Route path="/items" element={<ItemsPurchased />} ></Route>
          </Routes>
          

        </BrowserRouter>
      </div>
    );
  }
}

export default App;