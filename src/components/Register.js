import React, { Component } from "react";
import axios from "axios";
import { Navigate, Link } from "react-router-dom";

const postURL ="http://localhost:8080/luma/api/register";



class Register extends Component{
  constructor(props){
    super(props);
    this.state={
      empid:'',
      password:'',
      emp_name:'',
      designation:'',
      department:'',
      gender:'',
      registered:false
    };
  }

  handleSubmit = e => {
    e.preventDefault();

   //data - the payload returned from the server
    const payload = {
      employeeId:this.state.empid,
      password:this.state.password,
      employeeName:this.state.emp_name,
      designation:this.state.designation,
      department:this.state.department,
      gender:this.state.gender
    }
    console.log(payload)
    axios.post(postURL, payload)
      .then(res => {
          alert("Employee Registered Successfully!");
          this.setState({
            registered:true
          })
      }).catch(err=>{
        alert("Provide valid Employee Data");
          this.setState({
            registered:false
          })
      })
  }

  onChangeEmpId = e=>{
    console.log(e.target.value)
    this.setState({
      empid:e.target.value
    })
  } 
  onChangeName = e=>{
    this.setState({
      emp_name:e.target.value
    })
  }
  onChangePassword = e =>{
    console.log(e.target.value)
    this.setState({
      password:e.target.value
    })
  }
  onChangeDept = e =>{
    this.setState({
      department:e.target.value
    })
  }
  onChangeDesignation = e =>{
    this.setState({
      designation:e.target.value
    })
  }
 onChangeGender = e =>{
    this.setState({
      gender:e.target.value
    })
  }
    render() {
      if(localStorage.getItem('employee')){
        localStorage.removeItem('employee');
      }
      if(this.state.registered){
        return (
          <Navigate to='/' replace ={true}/>
        )
      }
        return (
          <div className="Register" style={{height:"450px"}}>
            <form className="form" onSubmit={this.handleSubmit}>
              <div className="input-group">
                <label htmlFor="empid" >Employee Id</label>
                <input type="text" name="empid" required onChange={this.onChangeEmpId} />
              </div>
              <div className="input-group">
                <label htmlFor="password" minlength="8" required>Password</label>
                <input type="password" name="password" required onChange={this.onChangePassword} />
              </div>
              <div className="input-group">
                <label htmlFor="emp_name">Name</label>
                <input type="text" name="emp_name" required onChange={this.onChangeName} />
              </div>
              <div className="input-group">
                <label htmlFor="designation">Designation</label>
                <input type="text" name="designation" required onChange={this.onChangeDesignation} />
              </div>
              <div className="input-group">
                <label htmlFor="department">Department</label>
                <input type="text" name="department" required onChange={this.onChangeDept}/>
              </div>
              <div className="input-group">
                <label htmlFor="gender">Gender</label>
                <input type="text" name="gender" required onChange={this.onChangeGender}/>
              </div>
              <button className="primary">Register</button>
              <div>
                <Link to="/">
                  <button className="secondary">Log In</button>
                </Link>
              </div>
            </form>
          </div>
        );
      }
}

export default Register;