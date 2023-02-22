const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  postsData: [
    { id: 1, message: "Hi , it is my first post", likeCount: 120000 },
    { id: 2, message: "Hi , it is my second post", likeCount: 564 },
    { id: 3, message: "Hi , it is my third post", likeCount: 321 },
    { id: 4, message: "Hi , it is my four post", likeCount: 890 },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likeCount: 0,
      };
      // state.postsData.push(newPost);
      // state.newPostText = "";
      return {
        ...state,
        newPostText: "",
        postsData: [...state.postsData, newPost],
      };
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostCreator = () => {
  return {
    type: ADD_POST,
  };
};
export const updateNewPostTextCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};
export default profileReducer;
