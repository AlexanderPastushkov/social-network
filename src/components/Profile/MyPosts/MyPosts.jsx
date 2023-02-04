import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  return (
    <div>
      My posts
      <div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>add post</button>
      </div>
      <div className={s.posts}>
        <Post message="Hi , it is my first post" />
        <Post message="Hi , it is my second post" />
        <Post message="Hi , it is my third post" />
      </div>
    </div>
  );
};
export default MyPosts;
