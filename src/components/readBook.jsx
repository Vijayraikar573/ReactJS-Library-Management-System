import React from 'react';
import '../styles/readBook.css'
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';

const ReadBook = () => {
    let [books,setBooks]=useState({})
    let params=useParams()
    useEffect(()=>{
        let fetchData=async()=>{
            let response=await fetch(`http://localhost:5000/books/${params.id}`)
            let data=await response.json();
            setBooks(data)
        }
        fetchData()
    })

  return (
    <div className='ReadBook'>
      <div className="readdetails">
        <img src={books.imageLink} alt=""/>
        <h1>Title :{books.title}</h1>
        <p>{books.description}</p>
        </div>
        </div>
  )
}
export default ReadBook;