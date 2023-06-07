import React from 'react'
import '../styles/addUsers.css'
import {useRef} from 'react'

const AddUsers = () => {
  let name=useRef(null);
  let email=useRef(null);
  let phonenumber=useRef(null);
  
  let submit=(e)=>{
    e.preventDefault()
    let data={
      name:name.current.value,
      email:email.current.value,
      phonenumber:phonenumber.current.value
    }
    fetch("http://localhost:5000/users",{
          method:'POST',
          headers:{"Content-Type":'application/json'},
          body:JSON.stringify(data)
    })
    alert("submitted");
  }
  return (
    <div className="mainuser">
    <div className='addusers' >
     
       <h1>Add Users</h1> 

       <div className="userform">
        <form action="" onSubmit={submit}>

          <div className='name'>
          <h3>Name</h3>
          <input ref={name} type="text" placeholder='Enter user name'/>
          </div>

          <div className='email-id'>
          <h3>Email id</h3>
          <input ref={email}type="text" placeholder='Enter email id'/>
          </div>

          <div className='contact'>
          <h3>Contact</h3>
          <input ref={phonenumber}type="text" placeholder='Enter contact number'/>
          </div>

          <div className='btn-addusers'>
            <button>Add Users</button>
          </div>
          
        </form>
        </div>
        </div>
        </div>
  )
}

export default AddUsers;