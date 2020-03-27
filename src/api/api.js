import React from 'react';
import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {"API-KEY": "9a3f002f-62ae-4604-a96a-eb4974fac9c9"}
});

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}
                 &count=${pageSize}`)
            .then(response => response.data)
    },
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data);
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`, {})
            .then(response => response.data);
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please, use profileAPI object');
        return profileAPI.getProfile(userId);
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, { status: status} )
    }
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
};
