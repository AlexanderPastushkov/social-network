import { usersAPI } from "../api/api";

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET-USERS";
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE";
const SET_FILTER = "users/SET_FILTER";
const SET_TOTAL_COUNT = "users/SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "users/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "users/TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 20,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
  portionSize: 0,
  filter: {
    term: "",
    friend: null,
  },
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
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case SET_FILTER:
      return { ...state, filter: action.payload };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

export const followSuccess = (userId) => {
  return {
    type: FOLLOW,
    userId: userId,
  };
};

export const unfollowSuccess = (userId) => {
  return {
    type: UNFOLLOW,
    userId: userId,
  };
};
export const toggleFollowingProgress = (isFetching, userId) => {
  return {
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId,
  };
};
export const setUsers = (users) => {
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
export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: { filter },
  };
};
export const setTotalUsersCount = (totalUsersCount) => {
  return {
    type: SET_TOTAL_COUNT,
    totalUsersCount,
  };
};

export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching,
  };
};
//========================================================================================================================================================
//thunk-creators
export const requestUsers = (page, pageSize, filter) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));
    dispatch(setFilter(filter));
    let data = await usersAPI.getUsers(
      page,
      pageSize,
      filter.term,
      filter.friend
    ); //axios.create -> we make request from DAL

    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  };
}; //пример замыкания

const followUnfollowFlow = async (
  dispatch,
  userId,
  apiMethod,
  actionCreator
) => {
  dispatch(toggleFollowingProgress(true, userId));
  let data = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

export const follow = (id) => {
  return async (dispatch) => {
    followUnfollowFlow(
      dispatch,
      id,
      usersAPI.follow.bind(usersAPI),
      followSuccess
    );
  };
};

export const unfollow = (id) => {
  return async (dispatch) => {
    followUnfollowFlow(
      dispatch,
      id,
      usersAPI.unfollow.bind(usersAPI),
      unfollowSuccess
    );
  };
};

export default usersReducer;
