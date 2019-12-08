import React, { useState, useEffect } from 'react';
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios'
import Loading from '../component/Loading'

const useStyles = makeStyles(theme => ({
    cover: {
      height: 300,
      width: 300,
      padding: "10px"
    }
    
  }));

const UserImages = ({userID}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [image, setImage] = useState([])
    const classes = useStyles();
    
    useEffect(() => {
        axios.get(`https://insta.nextacademy.com/api/v1/images?userId=${userID}` )
        .then(result => {
            console.log(result.data)
            setImage(result.data)
            setIsLoading(false)
        })
        .catch(error => {
            console.log('ERROR', error)
        })
    },[])
    
    if (isLoading) {
        return <Loading />;
      }
    return(
        <>
            {image.map(imgH => (
                <>
                  {/* <CardMedia
                    component="img" 
                    className={classes.cover}
                    img={imgH}
                    title="User Image"
                  /> */}
                  <img src={imgH} className={classes.cover} alt="user image" />
                </>
            ))}            

        </>
    )
}

export default UserImages