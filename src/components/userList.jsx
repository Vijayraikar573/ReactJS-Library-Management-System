import React from 'react'
import { useEffect, useState } from "react";
import '../styles/userList.css'
const UserList = () => {
  let [users, setUsers] = useState([])
  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch('http://localhost:5000/users')
      let data = await response.json()
      setUsers(data)
    }
    fetchData()
  },[users]);

  let deleteUser=(id,name)=>{
    fetch(`http://localhost:5000/users/${id}`,
    {method:'DELETE'})
    alert(`${name} deleted successfully`)
  }
  return (
    <div className="usermain">
      <div className="usernav">
          <h1>User List</h1>
        
      </div>
    <div className='userlist'>
      
        
      {users.map(data => (
        <div className="userData">
           {/* <img src={data.imageLink} alt="" height={"300px"} width={"200px"} />  */}
          <h1 className='utitle'>User Name :{data.name}</h1>
          <div className="udetails">
            <p >User E-mail :{data.email}</p>
            <p >User Phonenumber :{data.phonenumber}</p>
          </div>
          <div className="uextra">
           
            <button onClick={()=>deleteUser(data.id,data.name)}>Delete</button>
          </div>
        </div>
      )
      )}
    </div>
    </div>
  )
}

export default UserList;