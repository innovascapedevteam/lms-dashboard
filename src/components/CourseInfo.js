import React from 'react';
import './index.css'

export default function App() {
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
      <img className='faculty-image' src="data:image/jpeg;base64,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" alt="faculty-photu"/>
      <p className='faculty-name'>Instructor's Name</p>
      <p className='text-description'>Language : English,     Subtitles : English (Auto)</p>
      <p className='text-descriptiontwo'>3 Lectures,     10 Hours Total,   Begineer Level</p>
      <h4 className='Skills-text'>Skills</h4>
      <p className="Skills">Skills Skills Skills</p>
    </div>
    </div>
    </div>
    </div>
  )
}
