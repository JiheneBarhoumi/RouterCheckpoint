import React from 'react';
import {Redirect} from 'react-router-dom';
import '../login.css';

const Login=(props)=>{

    const { from } = props.location.state || { from: { pathname: "/" } };
  
    if (props.isLogged) {
      return <Redirect to={from} />;
    }
  
    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={props.handleLogin}>Log in</button>
      </div>
    );
  };


export default Login;