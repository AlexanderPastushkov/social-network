import s from "./News.module.css";
import NewsContent from "./NewsContent/NewsContent";

const News = (props) => {
  let newsElements = props.news.map((n) => (
    <NewsContent words={n.word} numbers={n.number} />
  ));
  let onAddNews = () => {
    props.addNews();
    //add post to bll
  };
  let onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewstText(text); //update post in state(bll)
  };

  return (
    <div>
      <div>{newsElements}</div>
      <div>
        <textarea
          onChange={onPostChange}
          value={props.newsValue}
          placeholder="enterNews"
        ></textarea>
      </div>
      <div>
        <button onClick={onAddNews}>addNews</button>
      </div>
    </div>
  );
};
export default News;
