import React, { Component } from 'react'
import { Link, Navigate } from 'react-router-dom';

class Dashboard extends Component {
  //localStorage is used to survive data  page refreshes
  render() {
    if (!localStorage.getItem('employee')){
        return <Navigate to="/" replace = {true}/>
    }
    return (
      <div>
        <h1>User Dashboard</h1>
        <div>
          <Link to="/loans">
            <button className="secondary">View Loans</button>
          </Link>
        </div>
        <div>
          <Link to="/applyloan">
            <button className="secondary">Apply for Loan</button>
          </Link>
        </div>
        <div>
          <Link to="/items">
            <button className="secondary">View items purchased</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Dashboard;
