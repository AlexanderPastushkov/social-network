const ADD_NEWS = "ADD-NEWS";
const UPDATE_NEWS_TEXT = "UPDATE-NEWS-TEXT";

let initialState = {
  newsData: [
    { id: 1, word: "hi", number: 12 },
    { id: 2, word: "yo", number: 12 },
    { id: 3, word: "hello", number: 12 },
    { id: 4, word: "how are you", number: 15 },
    { id: 5, word: "hello", number: 12 },
  ],
  newNewsText: "random",
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEWS: {
      let newNews = {
        id: 6,
        word: state.newNewsText,
        number: 77,
      };

      let stateCopy = { ...state }; //shallow copy state
      stateCopy.newsData = [...state.newsData]; //deep copy array
      stateCopy.newsData.push(newNews); //push obj to stateCopy
      stateCopy.newNewsText = ""; //clean value in stateCopy
      return stateCopy; //return new state
    }
    // return {
    //   ...state,
    //   newPostText: "",
    //   postsData: [...state.postsData, newPost],
    // };
    case UPDATE_NEWS_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newNewsText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const addNewsCreator = () => {
  return {
    type: ADD_NEWS,
  };
};
export const updateNewsCreator = (text) => {
  return {
    type: UPDATE_NEWS_TEXT,
    newText: text,
  };
};
export default newsReducer;
