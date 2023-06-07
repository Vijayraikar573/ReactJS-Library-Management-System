import React from 'react'
import '../styles/admin.css'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    let Navigate = useNavigate()
    let email = useRef(null);
    let password = useRef(null);

    let adminLogin = () => {
        if (email.current.value==="vijay123@gmail.com" && password.current.value==="12345") {
            Navigate('/adminPortal/adminHome')
        } else {
            alert("Invalid credentials")
        }
    };

    return (
        <div className='mainAdmin'>
         {/* <img src="/images/table-book.jpg" alt="" height={"400px"} width={"300px"}/> */}
        <div className='Admin'>
            <h1>Admin Login</h1>
            <div className='loginform'>
                <form action="" onSubmit={adminLogin}>
                    <div className='email'>
                        <h4>Email-Id</h4>
                        <input ref={email} type='text' placeholder='email_id' />
                    </div>
                    <div className='password'>
                        <h4>Password</h4>
                        <input ref={password} type='text' placeholder='password' />
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
export default AdminLogin;