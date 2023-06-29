import s from "./Post.module.css";
import patrick from "../../../../images/03.jpg";
import CounterWithHooks from "./CounterWithHooks";

const Post = ({ mes, like }) => {
  return (
    <div className={s.item}>
      <img className={s.img} src={patrick} alt="pic" />
      <p> {mes}</p>
      <div>
        <CounterWithHooks />
      </div>
    </div>
  );
};
export default Post;
