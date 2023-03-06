import React from 'react';
import '../index.css';

export default function Resources() {
  return (
    //NAVBAR
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
      <a class="nav-link" href="./Resources.js">Resources</a>
    </li>
    <br/><hr/><br/>
    <li class="nav-item">
      <a  class="nav-link" href="./App.js">Assignments</a>
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
    </div>

    {/* NAVBAR ITEMS */}
    <div className='navitems-container'>
    <nav class="navbar navbar-light bg-light">
      <a  class="navbar-brand" href=".">Notes</a>
    </nav>
  <nav class="navbar navbar-light bg-light">
    <a  class="navbar-brand" href=".">Infographics</a>
  </nav>
  <nav class="navbar navbar-light bg-light">
    <a class="navbar-brand" href=".">Charts</a>
  </nav>
  <nav class="navbar navbar-light bg-light">
    <a class="navbar-brand" href=".">Diagrams</a>
  </nav>
    </div>

    {/* LEVEL TABS */}
    <div className='lesson-item-container'>

    {/* TAB 1 */}
    <div className='level-one'>
      <p className='level1-text'>Level 1</p>
      <img className="eye-icon" src="https://cdn-icons-png.flaticon.com/512/159/159078.png" alt="eye-icon"/>
      <img className="download-icon" src="https://cdn-icons-png.flaticon.com/128/3580/3580085.png" alt="download-icon"/>
    </div>

    
    {/* TAB 2 */}
    <div className='level-two'>
    <p className='level1-text'>Level 2</p>
      <img className="eye-icon" src="https://cdn-icons-png.flaticon.com/512/159/159078.png" alt="eye-icon"/>
      <img className="download-icon" src="https://cdn-icons-png.flaticon.com/128/3580/3580085.png" alt="download-icon"/>
    </div>

    {/* TAB 3 */}
    <div className='level-three'>
    <p className='level1-text'>Level 3</p>
      <img className="eye-icon" src="https://cdn-icons-png.flaticon.com/512/159/159078.png" alt="eye-icon"/>
      <img className="download-icon" src="https://cdn-icons-png.flaticon.com/128/3580/3580085.png" alt="download-icon"/>
    </div>

    {/* TAB 4 */}
    <div className='level-four'>
    <p className='level1-text'>Level 4</p>
      <img className="eye-icon" src="https://cdn-icons-png.flaticon.com/512/159/159078.png" alt="eye-icon"/>
      <img className="download-icon" src="https://cdn-icons-png.flaticon.com/128/3580/3580085.png" alt="download-icon"/>
    </div>

    {/* TAB 5 */}
    <div className='level-five'>
    <p className='level1-text'>Level 5</p>
      <img className="eye-icon" src="https://cdn-icons-png.flaticon.com/512/159/159078.png" alt="eye-icon"/>
      <img className="download-icon" src="https://cdn-icons-png.flaticon.com/128/3580/3580085.png" alt="download-icon"/>
    </div>

    {/* TAB 6 */}
    <div className='level-six'>
    <p className='level1-text'>Level 6</p>
      <img className="eye-icon" src="https://cdn-icons-png.flaticon.com/512/159/159078.png" alt="eye-icon"/>
      <img className="download-icon" src="https://cdn-icons-png.flaticon.com/128/3580/3580085.png" alt="download-icon"/>
    </div>

    {/* TAB 7 */}
    <div className='level-seven'>
    <p className='level1-text'>Level 7</p>
      <img className="eye-icon" src="https://cdn-icons-png.flaticon.com/512/159/159078.png" alt="eye-icon"/>
      <img className="download-icon" src="https://cdn-icons-png.flaticon.com/128/3580/3580085.png" alt="download-icon"/>
    </div>

    {/* TAB 8 */}
    <div className='level-eight'>
    <p className='level1-text'>Level 8</p>
      <img className="eye-icon" src="https://cdn-icons-png.flaticon.com/512/159/159078.png" alt="eye-icon"/>
      <img className="download-icon" src="https://cdn-icons-png.flaticon.com/128/3580/3580085.png" alt="download-icon"/>
    </div>
    </div>
    </div>

    {/* VERTICAL LINE */}
    <div id="v1"></div>
    </div>
  )
}
