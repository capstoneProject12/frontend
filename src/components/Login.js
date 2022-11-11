import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from 'axios';

class Login extends Component {

  changeState = (loginState, employee) => {  
    this.setState({isLogin:loginState, employee:employee}); 
       }; 
  
  handleIdChange = e=>{
    this.setState({
      empId: e.target.value
    })

  }
  handlePasswordChange = e=>{
    this.setState({
      password: e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.empId) {
      alert("Employee id is required");
    } else if (!this.state.password) {
      alert("Password is required");
    } 
    else {
      const payload = {
        "employeeId":this.state.empId,
        "password":this.state.password
      }

      axios.post('http://localhost:8080/luma/api/login', payload)
        .then(res => {
            console.log(res.data)
            localStorage.setItem('employee',JSON.stringify(res.data));
            this.setState({
              isLogin: true
            })
          }
        ).catch(err => {
            alert("Wrong emp_id or password combination");
            this.setState({
              isLogin: false
            })
        })    
    }
  };

  render() {
    if (localStorage.getItem('employee')){
      return(
      <Navigate to="/home" replace={true} /> 
      );
    }
    return (
      <div className="Login">
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="empId"><b><h3>Employee Id</h3></b></label>
            <input type="text" name="empId" required onChange={this.handleIdChange} />
          </div>
          <div className="input-group">
            <label htmlFor="password"><b><h3>Password</h3></b></label>
            <input type="password" name="password" required onChange={this.handlePasswordChange} />
          </div>
          <button className = "primary" type="submit">Log In</button>
        </form>
        <div>
          <Link to="register">
            <button className="secondary">Register</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Login;
