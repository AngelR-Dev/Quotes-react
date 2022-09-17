import React, { useState } from "react";

const LikeCount = ({likes, likeActive, likeF, updateColor, heartColor}) => {
  // const [likes, setLikes] = useState(0);
  // const [likeActive, setLikeActive] = useState(false);

  const heartColors = {
    color: heartColor
  };

  return (
    <div className="likes">
      <button 
        className="likes__btn" 
        style={heartColors} 
        onClick={likeF}>
        ❤
      </button>
      <div className="likes__div">
        <p className="likes__text">Likes</p>
        <p className="likes__count">{likes}</p>
      </div>
    </div>
  );
};

export default LikeCount;
