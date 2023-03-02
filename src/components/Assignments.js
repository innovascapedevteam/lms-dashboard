import React from 'react';
import './index.css';

export default function App() {
  return (
    <div>
      <div className='heading-bar'>
        <h4 className='branding-name'>INNOVASCAPE</h4>
      </div>
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
    <hr id="v1"/>
    <div className='navitems-container'>
    <li class="nav-item">
      <a class="nav-link active" href=".">Pending Assignments</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href=".">Completed Assignments</a>
    </li>
    </div>
    <div className='assignment-text'>
      <h4>Assignment 3</h4>
      <p>Make a diagram of abc method and explain it in your own words</p>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
    <div className='assignment-tab'>
    <p className='level1-text'>Assignment.pdf</p>
      <img className="eye-icon" src="https://cdn-icons-png.flaticon.com/512/159/159078.png" alt="eye-icon"/>
      <img className="download-icon" src="https://cdn-icons-png.flaticon.com/128/3580/3580085.png" alt="download-icon"/>
      <button className='assignment-button'>Submit Assignment</button>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}
