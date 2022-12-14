import React, { Component } from 'react'
import LoanService from './LoanService';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

class LoanCardsAvailed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loanCards:[],
      emp: JSON.parse(localStorage.getItem('employee'))
    }
  }

//displays table data
  componentWillMount() {
    var empID = this.state.emp.employeeId;
    LoanService.getLoanDetails(empID).then((res) => {
      this.setState({
        loanCards: res.data
      })
    }).catch((err) => {
      console.log(err)
    })
  }
  render() {
    return (
      <div style={{ height: "450px" }}>
        <h1>Loan Cards Availed</h1>
        <div>
          <Grid style={this.gridStyle}>
            EMPLOYEE ID: {this.state.emp.employeeId}
          </Grid>
          <Grid style={this.gridStyle}>
            DESIGNATION: {this.state.emp.designation}
          </Grid>
          <Grid style={this.gridStyle}>
            DEPARTMENT: {this.state.emp.department}
          </Grid>
        </div>
        <div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Loan Id</TableCell>
                  <TableCell>Loan type</TableCell>
                  <TableCell>Duration (in years)</TableCell>
                  <TableCell>Card issue date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.loanCards.map((row) => (
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {row.loan_id}
                    </TableCell>
                    <TableCell>{row.loan_type}</TableCell>
                    <TableCell>{row.duration_in_years}</TableCell>
                    <TableCell>{row.card_issue_date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    )
  }
}

export default LoanCardsAvailed;
