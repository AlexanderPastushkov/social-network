import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsData = [
    { id: 1, message: "Hi , it is my first post", likeCount: 10 },
    { id: 1, message: "Hi , it is my second post", likeCount: 12 },
    { id: 1, message: "Hi , it is my third post", likeCount: 14 },
  ];
  return (
    <div className={s.myPosts_items}>
      <h3>My posts</h3>
      <div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>add post</button>
      </div>
      <div className={s.posts}>
        <Post
          message={postsData[0].message}
          likeCount={postsData[0].likeCount}
        />
        <Post message="Hi , it is my second post" likeCount="16" />
        <Post message="Hi , it is my third post" likeCount="11" />
      </div>
    </div>
  );
};
export default MyPosts;
