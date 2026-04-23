import React from 'react';
import './style.css';

const Header = () => {
  return (
    <header className='header'>
      <div className="search">
        <div className="facebook">
          <i className="fa-brands fa-facebook"></i>
        </div>
        <label htmlFor="searching">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder='Search Facebook' id='searching'/>
        </label>
      </div>

      <div className="menu">
        <div className="menu-icon active">
            <i className="fa-solid fa-house"></i>
        </div>
        <div className="menu-icon">
            <i className="fa-brands fa-youtube"></i>
        </div>
        <div className="menu-icon">
            <i className="fa-solid fa-store"></i>
        </div>
        <div className="menu-icon">
            <i className="fa-solid fa-users"></i>
        </div>
        <div className="menu-icon">
            <i className="fa-solid fa-gamepad"></i>
        </div>
      </div>

      <div className="side-menu">
        <div className="side-icon"><i className="fa-solid fa-bars"></i></div>
        <div className="side-icon"><i className="fa-brands fa-facebook-messenger"></i></div>
        <div className="side-icon"><i className="fa-solid fa-bell"></i></div>
        <div className="image">
         <img src="/images/profile.png" alt="profile" />
        </div>
      </div>
    </header>
  )
}


export default Header;
