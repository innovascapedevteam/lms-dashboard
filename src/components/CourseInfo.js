import React from 'react';
import '../index.css';

export default function Courseinfo() {
  return (
    // NAVBAR
    <div>
      <div className='heading-bar'>
        <h4 className='branding-name'>INNOVASCAPE</h4>
      </div>

      {/* CENTER DIV */}
      <div className='dashboard-div'>
        <div>
        <ul className='menu-list' class="nav flex-column">
        <br/><br/>
    <li class="nav-item">
      <a class="nav-link active" href=".">Course Overview</a>
    </li>
    <br/><hr/><br/>
    <li class="nav-item">
      <a class="nav-link" href=".">Resources</a>
    </li>
    <br/><hr/><br/>
    <li class="nav-item">
      <a  class="nav-link" href=".">Assignments</a>
    </li>
    <br/><hr/><br/>
    <li class="nav-item">
      <a class="nav-link disabled" href=".">Grade Cards</a>
    </li>
    <br/><hr/><br/>
    <li class="nav-item">
      <a class="nav-link disabled" href=".">Discussion Groups</a>
    </li>
    <br/><hr/><br/>
    <li class="nav-item">
      <a class="nav-link disabled" href=".">Messages</a>
    </li>
    <br/><hr/><br/>
    <li class="nav-item">
      <a class="nav-link disabled" href=".">Course Info</a>
    </li> 
    <br/><br/>
    </ul>

    {/* VERTICAL LINE */}
    <hr id="v1"/>

    {/* COURSE INFO STATIC TEXT */}
    <div className='courseinfo-text'>
      <h4>Quality Management System</h4>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
      <img className='faculty-image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLYO2C3SxbHRmTmYBRz7m8z6tnm08iBIBk9m5FZATu1g&s" alt="faculty-photu"/>
      <p className='faculty-name'>Instructor's Name</p>
      <p className='text-description'>Language : English,     Subtitles : English (Auto)</p>
      <p className='text-descriptiontwo'>3 Lectures,     10 Hours Total,   Begineer Level</p>
      <h4 className='Skills-text'>Skills</h4>
      <p className="Skillsone">Skills</p>
      <p className="Skillstwo">Skills</p>
      <p className="Skillsthree">Skills</p>
      <p className="Skillsfour">Skills</p>
    </div>
    </div>
    </div>
    </div>
  )
}
