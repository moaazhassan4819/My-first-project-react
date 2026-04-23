import React from 'react'
import './style.css';

const Aside = () => {
  return (
    <aside className="sidebar">
      <div className="aside-sect">
        <div className="image">
          <img src="/images/profile.png" alt="profile" />
        </div>
        <h4>Moaaz Rao</h4>
      </div>

      <div className="aside-sect">
        <i className="fa-brands fa-meta color-meta"></i>
        <h4>FriendMeta AI</h4>
      </div>

      <div className="aside-sect">
        <i className="fa-solid fa-user-group color-friends"></i>
        <h4>Friends</h4>
      </div>

      <div className="aside-sect">
        <i className="fa-solid fa-clock color-memories"></i>
        <h4>Memories</h4>
      </div>

      <div className="aside-sect">
        <i className="fa-solid fa-users color-groups"></i>
        <h4>Groups</h4>
      </div>

      <div className="aside-sect">
        <i className="fa-brands fa-youtube color-reels"></i>
        <h4>Reels</h4>
      </div>

      <div className="aside-sect">
        <i className="fa-solid fa-store color-market"></i>
        <h4>Market Place</h4>
      </div>

      <div className="aside-sect">
        <i className="fa-solid fa-house color-feeds"></i>
        <h4>Feeds</h4>
      </div>

      <div className="aside-sect">
        <i className="fa-regular fa-calendar color-events"></i>
        <h4>Events</h4>
      </div>

      <div className="aside-sect">
        <i className="fa-solid fa-chart-line color-ads"></i>
        <h4>Ads Manager</h4>
      </div>

      <div className="aside-sect">
        <div className="see-more-icon">
          <i className="fa-solid fa-chevron-down"></i>
        </div>
        <h4>See More</h4>
      </div>
    </aside>
  );
};

export default Aside;