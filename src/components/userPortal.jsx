import React from 'react'
import {Routes,Route} from 'react-router-dom';
import UserHome from './userHome';
import BookList from './booKList';

import UserNavbar from './userNavbar';
import '../styles/userPortal.css'
import ReadBook from './readBook';

const UserPortal = () => {
  return (
    <div className='userPortal'>
        <UserNavbar/>
        <Routes>
        <Route path='/userHome' element={<UserHome/>}/>
        <Route path='/booKList' element={<BookList/>}/>
    
     
        <Route path='/booKList/:id' element={<ReadBook/>}/>
        </Routes>
        </div>
  )
}

export default UserPortal;