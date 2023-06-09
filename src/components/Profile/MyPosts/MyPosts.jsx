import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { Textarea } from "../../Common/FormsControls/FormsControls";
const MyPosts = ({ postsData, addPost }) => {
  let postsElements = [...postsData]
    .reverse() //мутирующий метод ,нужно работать с копией массива [...postsData]
    .map((p) => <Post mes={p.message} like={p.likeCount} key={p.id} />);
  const addMyPost = (values) => {
    addPost(values.post);
  };
  return (
    <div className={s.myPosts_items}>
      <h3>My posts</h3>
      <PostsReduxForm onSubmit={addMyPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
const maxLength10 = maxLengthCreator(10);

const PostsForm = (props) => {
  //props.handleSubmit появляется в reduxForm()
  return (
    <form className={s.postForm} onSubmit={props.handleSubmit}>
      <div>
        <Field
          name={"post"}
          component={Textarea}
          validate={[required, maxLength10]}
        />
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
