const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const BUT_CHAMP = "BUT_CHAMP";

let initialState = {
  users: [],
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
      return { ...state, users: [...state.users, ...action.users] }; //склеиваем два массива добавляем юзеров
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
export default usersReducer;
