import React from 'react';
import { Redirect,Route } from "react-router-dom";

const ProtectedRoute=({component:Component,isLogged,...rest})=>{

    return <Route {...rest} render={(props)=>(isLogged)?<Component {...props}/>:<Redirect to={{pathname: '/login', state: {from: props.location}}} />}/>
}

export default ProtectedRoute;