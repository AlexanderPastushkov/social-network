const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";

let initialState = {
  users: [],
  pageSize: 20,
  totalUsersCount: 0,
  currentPage: 1,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        // users: [...state.users], то же самое что и  users:state.users.map((u)=>{return u}
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }

    case UNFOLLOW: {
      return {
        ...state,
        // usersData: [...state.usersData], то же самое что и  usersData:state.usersData.map((u)=>{return u}
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false }; //возвращаем нового пользователя с новым значением followed
          }
          return u;
        }),
      };
    }

    case SET_USERS:
      return { ...state, users: action.users };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_COUNT:
      return { ...state, totalUsersCount: action.totalUsersCount };
    default:
      return state;
  }
};

export const followAC = (userId) => {
  return {
    type: FOLLOW,
    userId: userId,
  };
};
export const unfollowAC = (userId) => {
  return {
    type: UNFOLLOW,
    userId: userId,
  };
};
export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};
export const setCurrentPageAC = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
};
export const setTotalUsersCountAC = (totalUsersCount) => {
  return {
    type: SET_TOTAL_COUNT,
    totalUsersCount,
  };
};
export default usersReducer;
