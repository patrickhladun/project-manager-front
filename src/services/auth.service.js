import React from 'react';

const API_URL = "http://localhost:8080/auth/";

class AuthService {
  
    login(username, password) {
        return fetch
        .post(API_URL + "signin", {
            username,
            password
        })
        .then(response => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        })
        .catch((err) => err );
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(username, email, password) {
        return fetch.put(API_URL + "signup", {
            username,
            email,
            password
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }
}

export default new AuthService();