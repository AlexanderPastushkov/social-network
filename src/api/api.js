import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "0f1cff10-61c5-4862-9131-225965aecd70",
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
};

export const followAPI = {
  unfollowUsers(id) {
    return instance.delete(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
  followUsers(id) {
    return instance.post(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
};
