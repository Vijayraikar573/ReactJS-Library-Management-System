import React from 'react';
import '../styles/userNavbar.css';
import { Link } from 'react-router-dom';
const UserNavbar = () => {
  return (
    <div className='navbar'>
        <div className="usernav_details">
        <Link to='userHome'><h2>User-Home</h2></Link>
            
            <Link to='booKList'><h3>Book-List</h3></Link>
        
            <Link to='/'><h3>Logout</h3></Link> 
            
        </div>
        </div>
  )
}
export default UserNavbar;