import React from 'react'
import './style.css';

const Rightbar = () => {
  return (
    <aside className="rightbar">
      <h3>Birthdays</h3>
      <div className="named">
        <i className="fa-solid fa-gift"></i>
        <p>Ali and 2 others have birthdays today.</p>
      </div>
    </aside>
  )
}

export default Rightbar