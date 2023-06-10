const ADD_MESSAGE = "dialogs/ADD-MESSAGE";
const SET_POSTS = "dialogs/SET_POSTS";
const SET_USERS = "dialogs/SET_USERS";
const SET_CURRENT_PAGE = "dialogs/SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "dialogs/SET_TOTAL_COUNT";

let initialState = {
  dialogsDataUsers: [],
  postsData: [],
  pageSize: 20,
  totalUsersCount: 0,
  currentPage: 1,
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let body = { id: 6, message: action.newMessageBody };
      return {
        ...state,
        messagesData: [...state.messagesData, body],
      };
    case SET_POSTS:
      return {
        ...state,
        postsData: action.postsData,
      };
    case SET_USERS:
      return {
        ...state,
        dialogsDataUsers: action.users,
      };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_COUNT:
      return { ...state, totalUsersCount: action.totalUsersCount };
    default:
      return state;
  }
};

export const addMessage = (newMessageBody) => {
  return {
    type: ADD_MESSAGE,
    newMessageBody,
  };
};

export const addAllPosts = (postsData) => {
  return {
    type: SET_POSTS,
    postsData,
  };
};
export const setDialogsDataUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
};
export const setTotalUsersCount = (totalUsersCount) => {
  return {
    type: SET_TOTAL_COUNT,
    totalUsersCount,
  };
};
export default dialogsReducer;
