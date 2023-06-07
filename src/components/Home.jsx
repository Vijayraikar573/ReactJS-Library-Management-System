import React from 'react'
import '../styles/Home.css'
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className='main'>
      
        <h1>LIBRARY MANAGEMENT SYSTEM</h1>
        <br />
        <img src="/images/greenlap.jpg" alt="" height={"350px"} width={"250px"} className='lwal'/>
        <img src="/images/redbook.jpg" alt="" height={"400px"} width={"650px"} className='wal'/>
        <img src="/images/greenlap.jpg" alt="" height={"350px"} width={"250px"} className='rwal'/>
        <h2>Sign in</h2>
        <br />
        
        <Link to='/admin'><button className='btn-admin'>Admin Login</button></Link>
        <br />
        <br/>
        <Link to='/user'><button className='btn-user'>User Login</button></Link>
        </div>
  )
}

export default Home
