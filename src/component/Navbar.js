import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

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
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <InstagramIcon fontSize="large" />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            
          </Typography>
          <ExitToAppIcon fontSize="large"/>
        </Toolbar>
      </AppBar>
    </div>
    )
}