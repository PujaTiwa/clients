import React from 'react';
import './LeftSidebar.css';
import { NavLink } from 'react-router-dom';
// import Globe from "../../assets/Globe.svg";

const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
      <nav className='side-nav'>
         <NavLink to='/' className='side-nav-links' activeClass='active'>
          <p>Home</p>
         </NavLink>
         <div className='side-nav-div'>
          <div><p>PUBLIC</p></div>
          <NavLink to='/Questions'>
            {/* <img src={Globe} alt='Globe' /> */}
            <p style={{paddingLeft: "10px"}}> Questions </p>
          </NavLink>
         </div>
      </nav>
    </div>
  )
}

export default LeftSidebar