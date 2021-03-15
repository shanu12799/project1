import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { useHistory } from 'react-router-dom';
import './Signin.css'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Made By © '}
      <Link color="inherit" href="https://material-ui.com/">
        Sachin Gupta
      </Link>{' '}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop:'25%'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const[useremail,setuseremail]=useState()
  const[password,setpassword]=useState()
  const[isSignup,setisSignup]=useState(false)
  const[isForget,setisForget]=useState(false)
  const history = useHistory();
  const classes = useStyles();

  const switchMode=()=>{
      setisSignup((previsSignup)=>!previsSignup)
  }
  const switchModeForgetPassword=()=>{
    setisForget((previsSignup)=>!previsSignup)
}

  const checklogin=()=>{
      if(useremail==="sachinguptaa099@gmail.com"&& password==="12345")
      {
        history.push('/Dashboard');
      }
      else{
          alert("Invalid email/password")
      }
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className="background" />
      <Grid item xs={12} sm={8} md={5} square style={{backgroundColor:'#ffffff'}}>
      <div className={classes.paper}>

          {isForget?
          (<div>
            <Typography component="h1" variant="h2" gutterBottom align="center" >
                Password Reset
            </Typography>
            <Typography component="h1" variant="h6" align="center">
                Enter your email to reset your password.
            </Typography>
            </div>
          ):
          (<div>
            <Typography component="h1" variant="h2" gutterBottom align="center" >
                {isSignup ? 'Sign up':'Sign in'}
            </Typography>
            <Typography component="h1" variant="h6" >
                {isSignup? 'Already have an Account':"Don't have an Account"}<Button style={{color:'#0000e6'}} onClick={switchMode}>{isSignup?'Sign in':'Sign up'}<ArrowRightAltIcon/></Button>
            </Typography>
            </div>
          )}
          
          
          
          <form className={classes.form} noValidate>
          {isForget?(null):(
            <div>
                 {isSignup && (<Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="firstname"
                    // value={useremail}
                    // onChange={(event)=>setuseremail(event.target.value)}
                    label="First Name"
                    name="firstname"
                    autoComplete="firstname"
                    autoFocus
                    />
              </Grid>
              <Grid item xs={12} sm={6}>
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="lastname"
                    // value={useremail}
                    // onChange={(event)=>setuseremail(event.target.value)}
                    label="Last Name"
                    name="lastname"
                    autoComplete="lastname"
                    autoFocus
                    />
              </Grid>
             </Grid>
          )} 
            </div>
          )}  
         
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              value={useremail}
              onChange={(event)=>setuseremail(event.target.value)}
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            {isForget?(null):(
               <TextField
               variant="outlined"
               margin="normal"
               required
               fullWidth
               value={password}
               onChange={(event)=>setpassword(event.target.value)}
               name="password"
               label="Password"
               type="password"
               id="password"
               autoComplete="current-password"
             />
            )}
            
            <Button
             onClick={checklogin}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              SEND
            </Button>
            <Grid container alignItems='center' alignContent='center'>
              <Grid item xs>
                  <Typography component="h1">{isForget?'Remember your password ?':'Forget your Password ?'}<Button style={{color:'#0000e6'}} onClick={switchModeForgetPassword}>{isForget?'Sign In here':'Reset password'} <ArrowRightAltIcon/></Button></Typography> 
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}