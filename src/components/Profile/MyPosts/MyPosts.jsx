import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsData = [
    { id: 1, message: "Hi , it is my first post", likeCount: 10 },
    { id: 1, message: "Hi , it is my second post", likeCount: 12 },
    { id: 1, message: "Hi , it is my third post", likeCount: 14 },
  ];
  let postsElements = postsData.map((p) => (
    <Post message={p.message} likeCount={p.likeCount} />
  ));

  return (
    <div className={s.myPosts_items}>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
export default MyPosts;
