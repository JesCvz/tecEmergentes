import { Button, Grid, Typography } from '@material-ui/core';
import { Input } from '@mui/material';
import React, {  useState } from 'react';


export const Data = () => {
    const [picture, setPicture] = useState([]);
    const [pictureSRC, setPictureSRC] = useState();


    const handlePhotoUpload = (e) => {
        setPicture([...picture, e.target.files[0]]);
        //console.log(picture);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('submit')
        const { url } = await fetch("http://localhost:8080/s3Url").then(res=>res.json());
        console.log(url);


        //Post the image
        if(picture.length>0){
            await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                body: picture[picture.length - 1 ]
            })
    
            const imageUrl = url.split('?')[0];
            console.log(imageUrl);
            setPictureSRC(imageUrl);
        }
        //post request to server
    }


    return(
        <Grid container justifyContent='center' >
            <Grid item  >
                <Typography variant='h2'> 
                    DATA
                </Typography>
                <button onClick={() => console.log(picture[picture.length - 1 ])}></button>
                <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={(e) => {handlePhotoUpload(e)}}/>
                <Button onClick={(e) => handleSubmit(e)} variant="contained" component="span">
                    Upload
                </Button>
                {pictureSRC && <img width={200} src={pictureSRC}></img>}
            </Grid>
        </Grid>
    )
   
}