import React from 'react'
import '../styles/addBooks.css'
import { useRef } from 'react';
const AddBooks = () => {
  let title=useRef(null);
  let author=useRef(null);
  let pages=useRef(null);
  let imageLink=useRef(null);

  let submit=(e)=>{
    e.preventDefault()
    let data={
      title:title.current.value,
      author:author.current.value,
      pages:pages.current.value,
      imageLink:imageLink.current.value
    }
    fetch("http://localhost:5000/books",{
      method:'POST',
      headers:{"Content-Type":'application/json'},
      body:JSON.stringify(data)
})
alert("submitted");
  }

  return (
    <div className="mainbook">
    <div className='addbooks'>
       <h1>Add Books</h1> 

       <div className="bookform">
        <form action="" onSubmit={submit}>

          <div className='title'>
          <h3>Book Title</h3>
          <input ref={title} type="text" placeholder='Enter book title'/>
          </div>

          <div className='author'>
          <h3>Author Name</h3>
          <input ref={author}type="text" placeholder='Enter author name'/>
          </div>

          <div className='edition'>
          <h3>Edition Name</h3>
          <input ref={pages}type="text" placeholder='Enter edition name'/>
          </div>

          <div className='thumbnail'>
          <h3>Thumbnail</h3>
          <input ref={imageLink} type="text" placeholder='Enter thumbnail address'/>
          </div>

          <div className='btn-books'>
            <button>Add Books</button>
          </div>
          
        </form>
        </div>
        </div>
        </div>
  )
}

export default AddBooks;