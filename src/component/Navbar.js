import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';

import Homepage from '../pages/Homepage'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export default function Navbar(){
    const classes = useStyles();
    return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: "#767271"}}>
        <Toolbar>
          <IconButton 
           tooltip="home"
           edge="start" 
           className={classes.menuButton} 
           color="inherit" 
          //  aria-label="menu"       
           linkButton={true}
           >
            <InstagramIcon fontSize="large" />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link to="/home" style={{textDecoration: 'none', color: 'white'}}>Home</Link>
          </Typography>
          <ExitToAppIcon fontSize="large"/>
        </Toolbar>
      </AppBar>
    </div>
    )
}