import React from "react";
import {
  addPostCreator,
  updateNewPostTextCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let state = props.store.getState(); //get state from props

  let addPost = () => {
    props.store.dispatch(addPostCreator()); //add post to bll
  };
  let onPostChange = (text) => {
    let action = updateNewPostTextCreator(text);
    props.store.dispatch(action); //update post in state(bll)
  };
  return (
    <MyPosts
      updateNewPostText={onPostChange} //callback
      addPost={addPost} //callbak
      postsData={state.profilePage.postsData} //array
      newPostText={state.profilePage.newPostText} //value of textarea
    />
  );
};
export default MyPostsContainer;
