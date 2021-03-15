
import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';


function Copyright() {
  return (
    <Typography variant="body2" style={{color:'white'}} align="center">
      {'Made By © '}
      <Link color="inherit" href="https://material-ui.com/">
        Sachin Gupta
      </Link>{' '}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width:'100%',
    borderRadius:10
  },
  sidepaper:{
    width:'75%',
    height:'120px',
    marginBottom:'30%',
    borderRadius:5,
    marginTop:'-15%',
    background: 'linear-gradient(to right, #48087d 54%, #330165 74%)'
  },
  form: {
    width: '90%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  margin: {
    margin: theme.spacing(1),
  },
}));
const ValidationTextField = withStyles({
    root: {
      '& input:valid + fieldset': {
        borderColor: '#0B0349',
        borderWidth: 2,
      },
      '& input:invalid + fieldset': {
        borderColor: '#0B0349',
        borderWidth: 2,
      },
      '& input:valid:focus + fieldset': {
        borderLeftWidth: 6,
        padding: '4px !important', // override inline-style
      },
    },
  })(TextField);

export default function Login() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper className={classes.paper} elevation={10}>
           <Card className={classes.sidepaper} elevation={10}>
                <Typography component="h1" align="center" variant="h5" style={{marginTop:'10%',color:'white'}}>
                    Sign up
                </Typography>
            </Card>

        <div className={classes.form} noValidate>
          <Grid container spacing={3}>
            <Grid item xs={12}>
            <ValidationTextField
                className={classes.margin}
                label="Email"
                required
                fullWidth
                variant="outlined"
                
            />
            </Grid>
            <Grid item xs={12}>
            <ValidationTextField
                className={classes.margin}
                label="Password"
                required
                variant="outlined"
                fullWidth
                type="password"
            />
            </Grid>
          </Grid>
          <Grid container justify="center">
            <Grid item>
            <Button
            type="submit"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
            </Grid>
          </Grid>
        </div>
      </Paper>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}