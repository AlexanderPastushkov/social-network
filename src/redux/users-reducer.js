const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const BUT_CHAMP = "BUT_CHAMP";
const TIMA = "TIMA";
let initialState = {
  users: [
    {
      id: 1,
      photoUrl: "https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg",
      followed: true,
      fullName: "Dmitry K.",
      status: "I am boss",
      location: { country: "Belarus", city: "Minsk" },
    },
    {
      id: 2,
      photoUrl: "https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg",
      followed: false,
      fullName: "Alex P.",
      status: "I like football",
      location: { country: "Belarus", city: "Zhlobin" },
    },
    {
      id: 3,
      photoUrl: "https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg",
      followed: false,
      fullName: "Darya P.",
      status: "I am beautiful",
      location: { country: "Belarus", city: "Zhlobin" },
    },
    {
      id: 4,
      photoUrl: "https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg",
      followed: true,
      fullName: "Timofey P.",
      status: "Hi , I am fan of Chelsea FC",
      location: { country: "USA", city: "Los-Angeles" },
    },
  ],
  buttons: [{ id: 1, clicked: true }],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUT_CHAMP: {
      return {
        ...state,
        buttons: state.buttons.map((b) => {
          if (b.id === action.btnId) {
            return { ...b, clicked: false };
          }
          return b;
        }),
      };
    }
    case TIMA: {
      return {
        ...state,
        buttons: state.buttons.map((b) => {
          if (b.id === action.btnId) {
            return { ...b, clicked: true };
          }
          return b;
        }),
      };
    }
    case FOLLOW: {
      return {
        ...state,
        // users: [...state.users], то же самое что и  users:state.users.map((u)=>{return u}
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
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
            return { ...u, followed: true }; //возвращаем нового пользователя с новым значением followed
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
export const buttonsAC = (btnId) => {
  return {
    type: BUT_CHAMP,
    btnId: btnId,
  };
};
export const timaAC = (btnId) => {
  return {
    type: TIMA,
    btnId: btnId,
  };
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
