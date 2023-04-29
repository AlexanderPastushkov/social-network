import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import { Field, reduxForm } from "redux-form";
const MyPosts = (props) => {
  let postsElements = props.postsData.map((p) => (
    <Post mes={p.message} like={p.likeCount} key={p.id} />
  ));

  // let onAddPost = () => {
  //   props.addPost();
  //   //add post to bll
  // };
  // let onPostChange = (e) => {
  //   let text = e.target.value;
  //   props.updateNewPostText(text); //update post in state(bll)
  // };
  const addPost = (values) => {
    props.addPost(values.post);
  };
  return (
    <div className={s.myPosts_items}>
      <h3>My posts</h3>
      <PostsReduxForm onSubmit={addPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
const PostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name={"post"} component={"textarea"} />
      </div>
      <div>
        <button className={s.button}>Add post</button>
      </div>
    </form>
  );
};

const PostsReduxForm = reduxForm({
  //we use HOC reduxForm() from 'redux-form'
  form: "posts", //we use unique name for the form --->"posts"
})(PostsForm);
export default MyPosts;
