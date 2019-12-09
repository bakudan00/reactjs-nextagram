import React, { useState, useEffect } from 'react';
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios'
import Image from "react-graceful-image";

import Loading from '../component/Loading'

const useStyles = makeStyles(theme => ({
    cover: {
      height: 250,
      width: 350,
      padding: "10px"
    }
    
  }));

const UserImages = ({userID}) => {
    const [image, setImage] = useState([])
   const [isLoading, setIsLoading] = useState(true);
    const classes = useStyles();

    axios.get(`https://insta.nextacademy.com/api/v1/images?userId=${userID}` )
    .then(result => {
        // console.log(result.data)
        setImage(result.data)
        setIsLoading(false)
    })
    .catch(error => {
        console.log('ERROR', error)
    })

    if (isLoading) {
      return <Loading />;
    }   
    return(
        <>
            {image.map(imgH => (
                <>
                  <Image src={imgH} 
                   className={classes.cover} 
                    alt="user image" 
                    retry={{ count: 10, delay: 2 }}
                  />
                </>
            ))}            

        </>
    )
}

export default UserImages