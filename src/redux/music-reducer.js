let SET_MUSIC = "SET_MUSIC";

let initialState = {
  musicData: [],
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MUSIC:
      return { ...state, musicData: [...state.musicData, ...action.musicData] }; //склеиваем два массива добавляем юзеров
    default:
      return state;
  }
};

export const setMusicAC = (musicData) => {
  return {
    type: SET_MUSIC,
    musicData: musicData,
  };
};
export default musicReducer;
