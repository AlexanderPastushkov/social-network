import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img className={s.img} src="" alt="pic" />
      {props.message}
      <div>
        <span>like{props.likeCount}</span>
      </div>
    </div>
  );
};
export default Post;
