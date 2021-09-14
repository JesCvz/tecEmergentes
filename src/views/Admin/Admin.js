import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { Route, Switch } from 'react-router';
import { Routes } from '../../Routes';
import { SideBar } from '../../components/SideBar/SideBar';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor: 'gray'
  },

  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    marginTop: 50,
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export const Admin = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <Typography variant="h6" noWrap>
                NAVBAR
              </Typography>
            </Toolbar>
          </AppBar>
          <SideBar/>
          <Grid xs={10} item className={classes.content}>
            <Grid xs={12} item className={classes.toolbar}> 
                    <Switch>
                        {Routes.map((route, index) => {
                            return(
                                <Route key={index} path={route.route} exact component={route.components} />
                            )
                        })}
                    </Switch>
                </Grid>
            </Grid>
        </div>
      );
}