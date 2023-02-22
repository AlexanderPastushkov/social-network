import React from "react";
import {
  addPostCreator,
  updateNewPostTextCreator,
} from "../../../redux/profile-reducer";
import StoreContext from "../../../storeContext";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {/* {" "} */}
      {(store) => {
        let state = store.getState();
        let addPost = () => {
          store.dispatch(addPostCreator()); //add post to bll
        };
        let onPostChange = (text) => {
          let action = updateNewPostTextCreator(text);
          store.dispatch(action); //update post in state(bll)
        };
        return (
          <MyPosts
            updateNewPostText={onPostChange} //callback
            addPost={addPost} //callbak
            postsData={state.profilePage.postsData} //array
            newPostText={state.profilePage.newPostText} //value of textarea
          />
        );
      }}
    </StoreContext.Consumer>
  );
};
export default MyPostsContainer;
