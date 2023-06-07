import React from 'react'
import {Routes,Route} from 'react-router-dom';
import AdminHome from './adminHome';
import BookList from './booKList';
import UserList from './userList';
import AddBooks from './addBooks';
import AddUsers from './addUsers';
import AdminNavbar from './adminNavbar';
import '../styles/adminPortal.css'
import ReadBook from './readBook';

const AdminPortal = () => {
  return (
    <div className='adminPortal'>
        <AdminNavbar/>
        <Routes>
        <Route path='/adminHome' element={<AdminHome/>}/>
        <Route path='/booKList' element={<BookList/>}/>
        <Route path='/userList' element={<UserList/>}/>
        <Route path='/addBooks' element={<AddBooks/>}/>
        <Route path='/addUsers' element={<AddUsers/>}/>
        <Route path='/booKList/:id' element={<ReadBook/>}/>
        </Routes>
        </div>
  )
}

export default AdminPortal;