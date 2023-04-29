import React from "react";
import { connect } from "react-redux";
import { addPost } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
  };
};

const MyPostsContainer = connect(mapStateToProps, { addPost })(MyPosts);
export default MyPostsContainer;

// const MyPostsContainer = (props) => {
//   return (
//     <StoreContext.Consumer>
//       {/* {" "} */}
//       {(store) => {
//         let state = store.getState();
//         let addPost = () => {
//           store.dispatch(addPostCreator()); //add post to bll
//         };
//         let onPostChange = (text) => {
//           let action = updateNewPostTextCreator(text);
//           store.dispatch(updateNewPostTextCreator(text)); //update post in state(bll)
//         };
//         return (
//           <MyPosts
//             updateNewPostText={onPostChange} //callback
//             addPost={addPost} //callbak
//             postsData={state.profilePage.postsData} //array
//             newPostText={state.profilePage.newPostText} //value of textarea
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };
