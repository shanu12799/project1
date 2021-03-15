import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import {user} from "../../dataArray"
import Grid from '@material-ui/core/Grid';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const useStyles = makeStyles({
  table: {
    minWidth: 1200,
  },
  container:{
    marginTop:'10%'
  }
});

export default function CustomizedTables() {
  const classes = useStyles();
  const [data,setdata]=React.useState(user);

  const getsearch=async(e)=>{
    const nameUpper = e.toUpperCase();
    const searchArray = [];
    if(e=='')
    {
      setdata(user)
    }
    else{
      console.log(e)
    user.map((d)=>{
      if(d.username.toUpperCase().includes(nameUpper))
        searchArray.push(d)
        })
     setdata(searchArray)
    }
}

  return (
    <div className={classes.container}>
      <Grid container direction="row"justify="flex-end" style={{marginTop:'15%'}}>
        <Grid item xs={12}>
     <TextField 
        id="filled-search" 
        label="Search field" 
        type="search" 
        variant="outlined"
        onChange={(event)=>getsearch(event.target.value)} 
     />
     </Grid>
     </Grid>
    <TableContainer component={Paper} style={{marginTop:'3%'}}>
   <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="center">Username</StyledTableCell>
            <StyledTableCell align="center">email&nbsp;</StyledTableCell>
            <StyledTableCell align="center">phone&nbsp;</StyledTableCell>
            <StyledTableCell align="center">website</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.username}</StyledTableCell>
              <StyledTableCell align="center">{row.email}</StyledTableCell>
              <StyledTableCell align="center">{row.phone}</StyledTableCell>
              <StyledTableCell align="center">{row.website}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
