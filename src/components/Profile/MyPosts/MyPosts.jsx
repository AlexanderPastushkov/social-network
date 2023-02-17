import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import {
  addPostCreator,
  updateNewPostTextCreator,
} from "../../../redux/state.js";

const MyPosts = (props) => {
  let postsElements = props.postsData.map((p) => (
    <Post mes={p.message} like={p.likeCount} />
  ));
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostCreator()); //add post to bll
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextCreator(text)); //update post in state(bll)
  };
  return (
    <div className={s.myPosts_items}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange} //callback
            ref={newPostElement}
            value={props.newPostText} //in props we get value which click on keyboard
          />
        </div>
        <div>
          <button onClick={addPost} className={s.btn}>
            Add post
          </button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
export default MyPosts;
