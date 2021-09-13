import { Grid } from '@material-ui/core';
import React from 'react';
import { SideBar } from '../../components/SideBar/SideBar';

export const Admin = () => {
    return(
        <Grid container>
            <Grid md={2} item>
                <SideBar/>
            </Grid>
            <Grid md={10} item>
                Pages
            </Grid>
        </Grid>
    )
}