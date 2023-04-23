import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  postsData: [
    { id: 1, message: "Hi , it is my first post", likeCount: 120000 },
    { id: 2, message: "Hi , it is my second post", likeCount: 564 },
    { id: 3, message: "Hi , it is my third post", likeCount: 321 },
    { id: 4, message: "Hi , it is my four post", likeCount: 890 },
  ],
  newPostText: "react world",
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likeCount: 0,
      };

      return {
        ...state,
        newPostText: "",
        postsData: [...state.postsData, newPost],
      }; //return new state
    }
    // return {
    //   ...state,
    //   newPostText: "",
    //   postsData: [...state.postsData, newPost],
    // };
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    default:
      return state;
  }
};

export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status: status,
  };
};
export const addPostCreator = () => {
  return {
    type: ADD_POST,
  };
};
export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};
export const updateNewPostTextCreator = (newText) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText,
  };
};
//========================================================================================================================================================
//thunk
export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then((data) => {
      dispatch(setStatus(data));
    });
  };
};
export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};
export const getProfile = (userId) => {
  return (dispatch) => {
    usersAPI.getProfile(userId).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};
export default profileReducer;
