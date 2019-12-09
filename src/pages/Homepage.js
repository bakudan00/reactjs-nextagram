import React, { useState, useEffect } from "react";
import Card from '@material-ui/core/Card';
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from '@material-ui/core/Typography';
import axios from 'axios'
import { Link } from 'react-router-dom';

//import component
import Loading from '../component/Loading'
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

export default function Homepage(){
    const classes = useStyles();
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    axios.get('https://insta.nextacademy.com/api/v1/users')
    .then(result => {
        // console.log(result.data)
        const results = result.data
        setUsers(results)
        setIsLoading(false)
    })
    .catch(error => {
        console.log('ERROR', error)
    })
    },[])

    if (isLoading) {
        return <Loading />;
      }
    return (
        <>
            <br />
            <Typography variant="h2" align="center">My Homepage</Typography>  
            <br />         
            <div >
                {users.map(user => (
                <Card className={classes.outer} key={user.id}>
                    <div className={classes.card}>
                        <div>
                            <CardContent key={user.id}>
                                <Typography variant="h5" key={user.id}>
                                    {user.username}
                                </Typography>
                            </CardContent>
                        </div>                   
                        <CardMedia
                            component="img"
                            className={classes.cover} 
                            image={user.profileImage}
                            title="User Profile" 
                            key={user.id}
                        />
                        <div>
                            <CardContent key={user.id}>
                                {/* <Buttons /> */}
                                <Button component={Link} to={`/userProfile/${user.id}`} variant="contained" style={{background: "#5683b0", color: "#faf5f5"}}>See more</Button>
                            </CardContent>
                        </div>                              
                    </div> 
                    <div>
                        <UserImage userID={user.id} />
                    </div>                                
                </Card> 
                ))}
           </div>
        </>
    )
}