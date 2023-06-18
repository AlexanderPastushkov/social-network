import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "0f1cff10-61c5-4862-9131-225965aecd70",
  },
});

export const authAPI = {
  me() {
    return instance.get("auth/me");
  },
  login(email, password, rememberMe = false, captcha = null) {
    return instance.post("auth/login", {
      email,
      password,
      rememberMe,
      captcha,
    }); //request payload email,password,rememberMe ---> according to API docs
  },
  logout() {
    return instance.delete("auth/login");
  },
};

export const usersAPI = {
  getUsers(currentPage, pageSize, term = "", friend) {
    return instance
      .get(
        `users?page=${currentPage}&count=${pageSize}&term=${term}` +
          (friend === null ? "" : `&friend=${friend}`)
      )
      .then((response) => response.data);
  },
  unfollow(id) {
    return instance.delete(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
  follow(id) {
    return instance.post(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
  getProfile(userId) {
    // console.log("Obsolete method. Please use profileAPI object");
    return profileAPI.getProfile(userId);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },
  getStatus(userId) {
    return instance
      .get(`profile/status/${userId}`)
      .then((response) => response.data);
  },
  updateStatus(status) {
    return instance
      .put(`profile/status`, { status: status }) //вместе в put  отправляем объект в котором есть свойство status, так указано в документации
      .then((response) => response.data);
  },
  savePhoto(photoFile) {
    let formData = new FormData();
    formData.append("image", photoFile);
    return instance.put(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  saveProfile(profile) {
    return instance.put(`profile/`, profile);
  },
};
export const securityAPI = {
  getCaptchaUrl() {
    return instance.get("security/get-captcha-url");
  },
};
