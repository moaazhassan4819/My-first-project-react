// src/components/Post.jsx

import React from "react";

const Post = ({ name, text, img }) => {
  return (
    <div className="feed-post">
      <h4>{name}</h4>
      <p>{text}</p>
       {img && <img src={img} alt="post" className="post-img" />}


       {/* 🔥 Actions section */}
      <div className="post-activity">
        <div className="activity">
          <i className="fa-regular fa-thumbs-up"></i>
          <span>Like</span>
        </div>

        <div className="activity">
          <i className="fa-regular fa-comment"></i>
          <span>Comment</span>
        </div>

        <div className="activity">
          <i className="fa-solid fa-share"></i>
          <span>Share</span>
        </div>
      </div>

    </div>
  );
};

export default Post;