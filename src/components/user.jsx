import React from 'react'
import '../styles/user.css'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
  let Navigate = useNavigate()
    let email = useRef(null);
    let password = useRef(null);

    let userLogin = () => {
        if (email.current.value==="ajay123@gmail.com" && password.current.value==="12345") {
            Navigate('/userPortal/userHome')
        } else {
            alert("Invalid credentials")
        }
    };
  return (
    <div className="mainUser">
    <div className='User'>
       <h1>UserLogin</h1> 
       <div className='loginformuser'>
        <form action="" onSubmit={userLogin}>
        <div className='email'>
          <h4>Email-Id</h4>
            <input ref={email} type='text' placeholder='email_id'/>
        </div>
        <div className='password'>
          <h4>Password</h4>
            <input ref={password} type='text' placeholder='password'/>

        </div>
        <div className='login'>
            <button>Login</button>
        </div>
        </form>
       </div>
        </div>
        </div>
  )
}

export default UserLogin;
