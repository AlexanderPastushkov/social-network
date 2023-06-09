import s from "./Post.module.css";
import patrick from "../../../../images/patrick.jpg";
const Post = ({ mes, like }) => {
  return (
    <div className={s.item}>
      <img className={s.img} src={patrick} alt="pic" />
      {mes}
      <div>
        <span>like {like}</span>
      </div>
    </div>
  );
};
export default Post;
