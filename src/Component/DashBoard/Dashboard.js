import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Listitem from './Listitem'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Line from './LineChart'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    [theme.breakpoints.down('sm')]: {
        // height:'350px',
        // width:'300px'
        display:'none'
      },
    // display:'none'
  },
  drawerPaper: {
    width: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  drawerContainer: {
    overflow: 'auto',
    marginTop:theme.spacing(5)
  },
  content: {
    flexGrow: 1,
    display:'flex',
    flexDirection:'column',
    padding: theme.spacing(3),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  chart:{
    width:'720px'
  },
  table:{
    width:'720px'
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    },
    list: {
      width: 250,
    },
    // table:{
    //   marginTop:'30%'
    // }
  
}));

export default function ClippedDrawer() {
  const classes = useStyles();
  const[view,setView]=React.useState(<Line/>);
  const[showchart,setshowchart]=React.useState(false)
  const [slidedrawer,setslidedrawer]=React.useState(false)
  // this one is to get drawer in mobile view
  const switchMode = () => {
    setslidedrawer((prevIs) => !prevIs);
  };

  const changeView=(view)=>{
     setView(view)
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar> 
          <Typography variant="h6" className={classes.title} noWrap>
            WELCOME
          </Typography>
          <div className={classes.sectionMobile}>
         <IconButton edge="start" className={classes.menuButton} onClick={switchMode} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </div>
        </Toolbar>
      </AppBar>
      {/* this drawer is for desktop view  */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <Listitem changeView={changeView}/>
        </div>
      </Drawer>
      {/* this drawer is for mobile view */}
      <Drawer
        anchor="left"
        open={slidedrawer}
        onClose={switchMode}
      >
        <Toolbar />
        <div className={classes.list}>
          <Listitem changeView={changeView}/>
        </div>
      </Drawer>

      <main className={classes.content}>
      {/* <Container maxWidth="xl"> */}
        <Grid container >
        
           
            <Grid item xs={12} sm={12} lg={12}>
              {view.type.name!="CustomizedTables" ?
              (
                <div className={classes.chart}> 
                   {view}
                 </div>
              ):(
                <div >
                  {view}
                </div>
                 )
              } 
            </Grid>
            
          
          
        </Grid>
      {/* </Container> */}
      </main>
    </div>
  );
}
