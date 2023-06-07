import React from 'react'
import '../styles/adminHome.css'
import {Link} from "react-router-dom";

const AdminHome = () => {
  return (
    <div className='mainHome'>
      <div className='secondHome'>
        <div className="greenimg">
        <img src={"https://www.greenwichlibrary.org/wp-content/themes/greenwich-sage/assets/images/icons/main-logo-green.svg"} alt=""/>
        </div>
        <div className="green">
     <p>Greenwich Library</p> 
     </div>
     <div className="greenicon">
        <img src={"/images/donate.png"} alt=""/>
        <img src={"/images/library.png"} alt=""/>
        <img src={"/images/accava.png"} alt=""/>
        <img src={"/images/mapasearch.png"} alt=""/>
     </div>
     </div>
        <div className="photo">
     <div className="galimg">
      <img src={"https://www.greenwichlibrary.org/wp-content/uploads/2022/09/Books.jpg"} alt=""/>
     </div>
     <div className="nat">
      <h6>NatGeo Photographer</h6>
      <p>on Thursday, April 20 at 7:00 pm, hear from award winning photographer vijay on the</p>
        <p>value of protecting our land and waters.</p>
      <button>Registrate Here</button>
     </div>
     </div>

     <div className="mainhelp">
     <div className="help">
      <img src={"https://www.greenwichlibrary.org/wp-content/uploads/2023/03/Resume-Help-2048x800.jpg"} alt="" />
      <div className="resume">
        <p>Help</p>
        <h1>Resume Writing Help</h1>
        <p>Do you find yourself back on the job market? Get help writing or tidying up your resume</p> 
          <p>from Greenwich Library’s Business Librarian. They’ll help you format and include key </p>
          <p>points so that you’ll land the interview!</p>
          <button>Book an Appointment</button>
      </div>
      </div>
     </div>

     <div className="Events">
    <h1>April Events</h1>
    <p>Join us for a full slate of programming and events at the Greenwich Libraries! These printable one-page</p>
    <p>Library calendars are fridge-ready.</p>
    <button>Printable Event Calendars</button>
     </div>

     <div className="mainPlan">
     
        <div className="taxhelp">
            <h1>Tax Help</h1>
            <p>On Saturday, April 8 from 9:00 am – 2:00 pm, drop in</p>
              <p>for one of our last sessions of one-on-one tax prep</p> 
              <p>assistance with AARP volunteers.</p>
            <Link >Make your Calender</Link>
        </div>
        <div className="interview">
        <h1>Interviewing</h1>
            <p>On Monday, April 10 at 1:00 pm, give yourself the edge</p>
              <p>over the other candidates during the interview process </p>
             <p> with career coach Noelle Gross.</p>
            <Link >Register</Link>
        </div>
        <div className="senior">
        <h1>Senior Living</h1>
        <p>On Wednesday, April 12 at 6:00 pm, learn about</p> 
              <p>different options, best practices, and resources</p>
               <p>available for the care of a senior loved one.</p>
            <Link>Register</Link>
        </div>
        <div className="seed">
        <h1>Grow a Plant from Seed</h1>
            <p>On Thursday, April 13 at 7:00 pm at Byram Shubert</p>
            <p>Library, learn the steps from seed to garden with Ellen</p>
            <p>Zampino.</p>
            <Link>Make your Calender</Link>
        </div>

      </div>

      <div className="mainDonate">
      <div className="donate">
      <img src={"https://www.greenwichlibrary.org/wp-content/uploads/2023/03/Volunteer-2048x800.jpg"} alt=""/>
      </div>
      <div className="dondetail">
      <p>Donate</p>
        <h1>Become a Volunteer</h1>
        <p>Find Your Place! Become a part of the amazing Friends of Greenwich Library team to</p>
        <p>help bring exceptional programming and resources to your community.</p> 
          <button>Learn more</button>
      </div>
      </div>
      
      <div className="business">
        <div className="bistitle">
          <h1>2023 Business Books To Read</h1>
        </div>
       
          <div className="bisimg">
        <img src={"https://contentcafe2.btol.com/ContentCafe/Jacket.aspx?&userID=GWH11030&password=CC64392&Value=9781647823221&content=M&Return=1&Type=M"} alt="" />
        <img src={"https://contentcafe2.btol.com/ContentCafe/Jacket.aspx?&userID=GWH11030&password=CC64392&Value=9781647824693&content=M&Return=1&Type=M"} alt=""/>
        <img src={"https://contentcafe2.btol.com/ContentCafe/Jacket.aspx?&userID=GWH11030&password=CC64392&Value=9781637741986&content=M&Return=1&Type=M"} alt=""/>
        </div>  
        <button>Take A Look</button>
        </div>


      <div className="thought">
        <div className="thoughtname">
          <h1>Michael Embry</h1>
          </div>
          <div className="thoughtful">
          <p>I don’t have to look far to find treasures. I discover them every </p>
          <p>time I visit a library.</p>
          </div>
      </div>

      <div className="last">
        <div className="sign">
          <h1>Sign Up for Our Newsletter</h1>
          <p>Stay up to date with library events,</p>
             <p>new books, or what's going on in our</p>
              <p>community.</p>
          <button>Sign Up</button>
        </div>
        <div className="dona">
        <h1>Support The Library</h1>
          <p>Donate today and help ensure that the Library</p>
             <p>continues to evolve to meet the needs of our</p>
              <p>community.</p>
          <button>Donate Now</button>
        </div>
      </div>

     
   
      </div>
   
  )
}

export default AdminHome;