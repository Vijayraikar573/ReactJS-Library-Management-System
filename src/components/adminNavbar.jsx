import React from 'react';
import '../styles/adminNavbar.css';
import { Link } from 'react-router-dom';
const AdminNavbar = () => {
  return (
    <div className='navbar'>
        <div className="nav_details">
        <Link to='adminHome'><h2>Admin-Home</h2></Link>
            <Link to='addBooks'><h3>Add-Books</h3></Link>
            <Link to='addUsers'><h3>Add-Users</h3></Link>
            <Link to='booKList'><h3>Book-List</h3></Link>
            <Link to='UserList'><h3>User-List</h3></Link> 
            <Link to='/'><h3>Logout</h3></Link> 
            
        </div>
        </div>
  )
}
export default AdminNavbar;