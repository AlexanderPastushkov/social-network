import React, { useState } from "react";
import likeImg from "../../../../images/like.png";
import dislikeImg from "../../../../images/dislike.png";
import s from "./Counter.module.css";

const CounterWithHooks = () => {
  const [countLike, setCountLikes] = useState(0);
  const [countDislike, setCountDislikes] = useState(0);
  const likes = () => {
    setCountLikes(countLike + 1);
  };
  const dislikes = () => {
    setCountDislikes(countDislike + 1);
  };

  return (
    <div>
      <div className={s.counter}>
        <button className={s.btn} onClick={dislikes}>
          <img className={s.likeImg} src={dislikeImg} alt="dislikes" />
        </button>
        <span>{countDislike}</span>
        <button className={s.btn} onClick={likes}>
          <img className={s.likeImg} src={likeImg} alt="likes" />
        </button>
        <span>{countLike}</span>
      </div>
    </div>
  );
};
export default CounterWithHooks;
