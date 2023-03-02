import React from 'react';
import './index.css'

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
      <a class="nav-link" href="./Resources.js">Resources</a>
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
    </div>
    <div className='navitems-container'>
    <li class="nav-item">
      <a class="nav-link active" href=".">Notes</a>
    </li>
   
    <li class="nav-item">
      <a class="nav-link" href=".">Infographics</a>
    </li>
   
    <li class="nav-item">
      <a  class="nav-link" href=".">Charts</a>
    </li>
    
    <li class="nav-item">
      <a class="nav-link disabled" href=".">Diagrams</a>
      
    </li>
    </div>
    <div className='lesson-item-container'>
    <div className='level-one'>
      <p className='level1-text'>Level 1</p>
      <img className="eye-icon" src="https://cdn-icons-png.flaticon.com/512/159/159078.png" alt="eye-icon"/>
      <img className="download-icon" src="https://cdn-icons-png.flaticon.com/128/3580/3580085.png" alt="download-icon"/>
    </div>
    <div className='level-two'>
    <p className='level1-text'>Level 2</p>
      <img className="eye-icon" src="https://cdn-icons-png.flaticon.com/512/159/159078.png" alt="eye-icon"/>
      <img className="download-icon" src="https://cdn-icons-png.flaticon.com/128/3580/3580085.png" alt="download-icon"/>
    </div>
    <div className='level-three'>
    <p className='level1-text'>Level 3</p>
      <img className="eye-icon" src="https://cdn-icons-png.flaticon.com/512/159/159078.png" alt="eye-icon"/>
      <img className="download-icon" src="https://cdn-icons-png.flaticon.com/128/3580/3580085.png" alt="download-icon"/>
    </div>
    <div className='level-four'>
    <p className='level1-text'>Level 4</p>
      <img className="eye-icon" src="https://cdn-icons-png.flaticon.com/512/159/159078.png" alt="eye-icon"/>
      <img className="download-icon" src="https://cdn-icons-png.flaticon.com/128/3580/3580085.png" alt="download-icon"/>
    </div>
    <button className='certificate-button'>Download Certificate</button>
    </div>
    </div>
    </div>
  )
}
