import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Collapse } from '@material-ui/core';
import { Routes } from '../../Routes';
import { useHistory } from 'react-router-dom';

const drawerWidth = 240;
const user = 'Jesus Marroquin';
const useSyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
      },
      root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
      },
      nested: {
        paddingLeft: theme.spacing(4),
      },
    }));

export const SideBar = () => {
    const [open, setOpen] = useState(false);
    const classes = useSyles();
    let history = useHistory();

    const handleClickHistory = (args) => {
        history.push(args); 
    }
    const handleClick = () => {
        setOpen(!open);
      };

    return(
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
            paper: classes.drawerPaper,
            }}
            anchor="left"
        >
            <div className={classes.toolbar} />

            <List>
                <ListItem button onClick={handleClick}>
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary={user} />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText primary="Cerrar Sesion" />
                    </ListItem>
                    </List>
                </Collapse>
            </List>

            <Divider />
            <List>
                {Routes.map((route, index) => {
                    return(
                        <ListItem id={route.name} button key={route.name} onClick={() => {handleClickHistory(route.route)}}>
                            <ListItemIcon children={<route.icon/>}/>
                            <ListItemText primary={route.name} />
                        </ListItem>
                    )
                })}
            </List>
        </Drawer>
    )
}