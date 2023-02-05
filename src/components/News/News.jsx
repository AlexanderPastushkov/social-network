import s from "./News.module.css";
import NewsContent from "./NewsContent/NewsContent";

const News = (props) => {
  let newsElements = props.news.map((n) => (
    <NewsContent words={n.word} numbers={n.number} />
  ));
  return <div>{newsElements}</div>;
};
export default News;
