import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = (props) => {
    const [userInput, setUserInput] = useState({ username: '', password: '' })


    const handleChange = e =>{
      setUserInput({
        ...userInput,
        [e.target.value]: e.target.value
      })
      
    }

    const handleSubmit = e =>{
      e.preventDefault();

      axiosWithAuth().post('/api/login', userInput)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.payload);
        props.history.push('/bubble-page');        
      })
      .catch(error => {
        console.log(error);
        alert('incorrect username or password');
        
      })
    }


  return (
    <>
      <h1>Login to Get Your Colors on!</h1>
      <form onSubmit={handleSubmit}>

        <input 
          onChange={handleChange}
          type="text"
          name="username"
          placeholder="enter username"
          value={userInput.username}
        />

        <input 
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="enter password"
          value={userInput.password}        
        />

        <button>Login</button>

      </form>
    </>
  );
};

export default Login;
