import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import {useStyles} from './HeaderStyles';

export function Header(){
    const classes = useStyles();
    return(
        <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <HomeIcon  />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Sportz Interactive
          </Typography>
        </Toolbar>
      </AppBar>
    )
}