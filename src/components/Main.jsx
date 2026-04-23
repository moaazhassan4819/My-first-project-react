  import React from 'react'
  import './style.css';
  import Post  from './Post';


  const Main = () => {
    return (
      <main>
          <div className="post">
            <div className="image">
              <img src="/images/profile.png" alt="profile" />
            </div>

              <input type="text" placeholder="What's on your mind, Moaaz ?" />

              <div className="mind-post">
                <i className="fa-solid fa-video"></i>
                <i className="fa-regular fa-image"></i>
                <i className="fa-regular fa-face-smile"></i>
              </div>
          </div>

        <Post name="Moaaz Rao" text="Hi Everyone!" img="/images/profile.png" alt="profile" />
        <Post name="Ahmed" text="Enjoy Nature" img="/images/ahmed.png" alt="profile" />
        <Post name="Sara" text="Today is a good day" img="/images/sara.png" alt="profile" />

        <Post name="Moaaz Rao" text="Hi Everyone!" img="/images/profile.png" alt="profile" />
        <Post name="Ahmed" text="Enjoy Nature" img="/images/ahmed.png" alt="profile" />
        <Post name="Sara" text="Today is a good day" img="/images/sara.png" alt="profile" />
      </main>
    )
  }

  export default Main;
