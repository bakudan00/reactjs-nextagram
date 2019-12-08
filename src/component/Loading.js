import React, { Component } from 'react';
import LoadingImg from '../media/Ripple-1.2s-404px.svg'

export default function Loading(){
    return(
        <>
        <div style={{position:"absolute", display: "flex", justifyContent: "center", top: "30%", left: "50%", right:"50%"}}>
            <img src={LoadingImg} alt="loader"/>
         </div>        
        </>
    )
}