import s from "./NewsContent.module.css";

const NewsContent = (props) => {
  return (
    <div>
      <div className={s.content}>{props.words}</div>
    </div>
  );
};
export default NewsContent;
