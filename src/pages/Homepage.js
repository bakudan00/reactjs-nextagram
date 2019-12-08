import React, { useState, useEffect } from "react";
import Card from '@material-ui/core/Card';
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from '@material-ui/core/Typography';
import axios from 'axios'

import Loading from '../component/Loading'

const useStyles = makeStyles(theme => ({
    card: {
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
        console.log(results)
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
            <Typography variant="h2" align="center">My Homepage</Typography>           
            <div>
                {users.map(user => (
                <Card className={classes.card} id={user.id}>
                    <div>
                        <CardContent id={user.id}>
                            <Typography variant="h5" id={user.id}>
                                {user.username}
                            </Typography>
                        </CardContent>
                    </div>                   
                    <CardMedia
                        component="img"
                        className={classes.cover} 
                        image={user.profileImage}
                        title="User Image" 
                        id={user.id}
                    />
                    <div>
                        <CardContent id={user.id}>
                            <Button variant="contained" style={{background: "#5683b0", color: "#faf5f5"}}>See more</Button>
                        </CardContent>
                    </div>                     

                </Card> 
                ))}
                {users.map(img => (
                    <>
                    </>
                ))}
           </div>
        </>
    )
}