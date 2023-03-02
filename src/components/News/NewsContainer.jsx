import { connect } from "react-redux";
import { addNewsCreator, updateNewsCreator } from "../../redux/news-reducer";
import News from "./News";

let mapStateToProps = (state) => {
  return {
    news: state.newsPage.newsData, //object - key:news(идет в название пропса в News),value:state.newsPage(объект с массивами [newsData]
    newsValue: state.newsPage.newNewsText,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewstText: (text) => {
      dispatch(updateNewsCreator(text));
    },
    addNews: () => {
      dispatch(addNewsCreator());
    },
  };
};

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News); //we connect our data to store and make container component
export default NewsContainer;
