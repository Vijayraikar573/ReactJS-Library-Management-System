import React from 'react'
import { useEffect, useState } from "react";
import '../styles/booKList.css';
import {useLocation,useNavigate} from 'react-router-dom';

const BookList = () => {

  let navigate=useNavigate()
  let location=useLocation()

  let [books, setBooks] = useState([])
  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch('http://localhost:5000/books')
      let data = await response.json()
      setBooks(data)
    }
    fetchData()
  });

  let deleteBook=(id,title)=>{
    fetch(`http://localhost:5000/books/${id}`,
    {method:'DELETE'})
    alert(`${title} deleted successfully`)
  }
  

  const readbookbtn=(id)=>{
    if(location.pathname==='/adminPortal/booKList'){
      navigate(`/adminPortal/booKList/${id}`)
    }
    else{
      navigate(`/userPortal/booKList/${id}`)
    }
    }
  
  return (
    <div className="bookmain">
      <div className="booknav">
          <h1>Book Gallery</h1>
        
      </div>
    <div className='booklist'>
      
        
      {books.map(data => (
        <div className="bookData">
          <img src={data.imageLink} alt="" height={"300px"} width={"200px"} />
          <h1 className='btitle'>Title:{data.title}</h1>
          <div className="bdetails">
            <p >Pages:{data.pages}</p>
            <p >Year:{data.year}</p>
          </div>
          <div className="extra">
            <button onClick={()=>readbookbtn(data.id)} ><h4>Read More</h4></button>
            <br/>
            {/* <Link to={`/adminPortal/booKList/${data.id}`}><h4>Read more</h4></Link> */}
            {location.pathname==='/adminPortal/booKList' && <button onClick={()=>deleteBook(data.id,data.title)}><h4>Delete</h4></button>}
          </div>
        </div>
      )
      )}
    </div>
    </div>
  )
}

export default BookList;