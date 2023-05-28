import s from "./Post.module.css";
import patrick from "../../../../images/patrick.jpg";
const Post = ({ mes, like, key }) => {
  return (
    <div className={s.item} key={key}>
      <img className={s.img} src={patrick} alt="pic" />
      {mes}
      <div>
        <span>like {like}</span>
      </div>
    </div>
  );
};
export default Post;
