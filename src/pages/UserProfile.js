import React, { useState, useEffect } from "react"
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
//use useParam to take from URL parameter :<id>
import { useParams } from 'react-router'
import axios from 'axios'

import UserImage from '../component/UserImages'

const useStyles = makeStyles(theme => ({
    card: {
      display: "flex",
      flexDirection: "column",
    },
    outer: {
      display: "flex",
      border: "1px solid #cbced1",
      fontSize: "10px",
      marginTop: "10px",
      marginBottom: "20px"
    },
    cover: {
      width: 200,
      borderRadius: 100,
      padding: "10px"
    }
    
  }));

const UserProfile = () => {
 const [users, setUsers] = useState({
    id : '',
    profileImage : "",
    username : ""
 });
//  const [isLoading, setIsLoading] = useState(true);
const classes = useStyles();
 //declare id in useParams()
 const { id } = useParams()
 
 useEffect(() => {
    axios.get(`https://insta.nextacademy.com/api/v1/users/${id}`)
    .then(result => {
        // console.log(result.data.username)
        setUsers({
            id : result.data.id,
            profileImage : result.data.profileImage,
            username : result.data.username
        })
        // setIsLoading(false)
    })
    .catch(error => {
        console.log('ERROR', error)
    })
    },[])
  return (
      <>
      <br />      
      <Typography variant="h2" align="center">User Profile {id} </Typography> 
      <br />
      <div>
        <Card className={classes.outer} key={users.id}>
            <div className={classes.card}>                 
                <CardMedia
                    component="img"
                    className={classes.cover} 
                    image={users.profileImage}
                    title="User Profile" 
                    key={users.id}
                />  
                <div>
                    <CardContent key={users.id}>
                        <Typography variant="h5" key={users.id}>
                            {users.username}
                        </Typography>
                    </CardContent>
                </div>                                         
            </div> 
            <div>
                <UserImage userID={users.id} />
            </div>                                
        </Card>         
      </div>
      </>
  )
}

export default UserProfile