import { profileAPI, usersAPI } from "../api/api";
import { PhotosType } from "../types/types.js";
import { catchGlobalError } from "./app-reducer.ts";

const ADD_POST = "profile-reducer/ADD-POST";
const SET_USER_PROFILE = "profile-reducer/SET_USER_PROFILE";
const SET_STATUS = "profile-reducer/SET_STATUS";
const SAVE_PHOTO_SUCCESS = "profile-reducer/SAVE_PHOTO_SUCCESS";

let initialState = {
  postsData: [
    { id: 1, message: "Hi , it is my first post" },
    { id: 2, message: "Hi , it is my second post" },
    { id: 3, message: "Hi , it is my third post" },
    { id: 4, message: "Hi , it is my four post" },
  ] as Array<PostType>,

  profile: null as ProfileType | null,
  status: "",
};

export type InitialStateType = typeof initialState;

const profileReducer = (
  state = initialState,
  action: any
): InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.post,
      };

      return {
        ...state,

        postsData: [...state.postsData, newPost],
      };
    }
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      };
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
//========================================================================================================================================================
//action-creators

type SetStatusCreatorType = {
  type: typeof SET_STATUS;
  status: string;
};
export const setStatus = (status: string): SetStatusCreatorType => {
  return {
    type: SET_STATUS,
    status,
  };
};

type AddPostCreatorType = {
  type: typeof ADD_POST;
  post: string;
};
export const addPost = (post: string): AddPostCreatorType => {
  return {
    type: ADD_POST,
    post,
  };
};

type SetUserProfileCreatorType = {
  type: typeof SET_USER_PROFILE;
  profile: ProfileType;
};
export const setUserProfile = (
  profile: ProfileType
): SetUserProfileCreatorType => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};

type SavePhotosCreatorType = {
  type: typeof SAVE_PHOTO_SUCCESS;
  photos: PhotosType;
};
export const savePhotoSuccess = (photos: PhotosType): SavePhotosCreatorType => {
  return {
    type: SAVE_PHOTO_SUCCESS,
    photos,
  };
};
//========================================================================================================================================================
//thunk
export const getStatus = (userId: number) => {
  return (dispatch: any) => {
    profileAPI.getStatus(userId).then((data) => {
      dispatch(setStatus(data));
    });
  };
};
export const updateStatus = (status: string) => {
  return (dispatch: any) => {
    profileAPI.updateStatus(status).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setStatus(status));
      }
      console.log(data); //if (resultCode!==0)
      dispatch(catchGlobalError(data.messages.join()));
    });
  };
};
export const savePhoto = (file: any) => {
  return async (dispatch: any) => {
    let response = await profileAPI.savePhoto(file);

    if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.data.photos));
    }
  };
};
export const saveProfile = (profile: ProfileType) => {
  return async (dispatch: any, getState: any) => {
    const userId = getState().auth.id;
    const response = await profileAPI.saveProfile(profile);

    if (response.data.resultCode === 0) {
      dispatch(getProfile(userId));
    }
  };
};
export const getProfile = (userId: number) => {
  return (dispatch: any) => {
    usersAPI.getProfile(userId).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};
export default profileReducer;
