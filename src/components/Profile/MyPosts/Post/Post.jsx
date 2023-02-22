import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        className={s.img}
        src="https://bipbap.ru/wp-content/uploads/2022/11/1652235719_20-kartinkin-net-p-prikolnie-kartinki-dlya-stima-21.jpg"
        alt="pic"
      />
      {props.mes}
      <div>
        <span>like {props.like}</span>
      </div>
    </div>
  );
};
export default Post;
