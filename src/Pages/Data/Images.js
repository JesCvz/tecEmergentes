import { Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';


export const Images = () => {
    const [pictureSRC, setPictureSRC] = useState();
    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {

            console.log('submit')
            const { url } = await fetch("http://localhost:8080/s3Url").then(res=>res.json());    
            const imageUrl = url.split('?')[0];
            console.log(url);
            console.log(imageUrl);
            setPictureSRC(imageUrl);
        }


    return(
        <Grid container justifyContent='center' >
            <Grid item  >
                <Typography variant='h2'> 
                    Images
                </Typography>
                {pictureSRC && <img width={200} src={pictureSRC}></img>}
            </Grid>
        </Grid>
    )
   
}