import React from 'react';
import './index.css';
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
      <a class="nav-link active" href="./App.js">Course Overview</a>
    </li>
    <br/><hr/><br/>
    <li class="nav-item">
      <a class="nav-link" href="./Resources.js">Resources</a>
    </li>
    <br/><hr/><br/>
    <li class="nav-item">
      <a  class="nav-link" href="./Assignments.js">Assignments</a>
    </li>
    <br/><hr/><br/>
    <li class="nav-item">
      <a class="nav-link disabled" href="./GradeCards.js">Grade Cards</a>
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
      <a class="nav-link disabled" href="./CourseInfo.js">Course Info</a>
    </li> 
    <br/><br/>
    </ul>

    {/* VERTICAL LINE */}
    <div id="v1"></div>

    {/* STUDENT STAT DIV'S */}
    <div className='stats-divs'>
    <div className='firststat'>
      <p> Submission On</p>
      <h2 className='numbers'>03</h2>
      <p>Aug 2021</p>
    </div>
    <div className='secondstat'>
    <p> Pending Assignments</p>
      <h2 className='numbers'>1</h2>
      <p>Courses</p>
    </div>
    <div className='thirdstat'>
    <p>Completed Assignments</p>
      <h2 className='numbers'>1</h2>
      <p>Courses</p>
    </div>
    <div className='fourthstat'>
    <p>Completed Assignments</p>
    <h2 className='numbers'>1</h2>
    <p>Courses</p>
    </div>
    </div>

    {/* PROGRESS BAR, ROADMAP AND GO TO LEVEL */}
    <div className='progress-bar'>
      <h3> Your Progress</h3>
      <meter className='meter-bar' value="6" min="2" max="10">50</meter>
      <span className='metervalue'>50 %</span>
      <br/><br/>    
    <h3> Roadmap</h3>
    <p>Create your own roadmap by setting milestones and goals.</p>
    <button className='roadmap-btn'>Roadmap</button>
    <button className='level-btn' id=".bg-success" >Go To The Levels</button>
    </div>
    </div>
    </div>
    </div>
  )
}
