import axios from "axios";

const headers = {
    "Content-type": "application/json"
};

const apiUrl = "http://localhost:8000";

export default {
    signin: function (email, password) {
        return axios.post(
            `${apiUrl}/user/login`,
            {
                email: email,
                password: password
            },
            {
                headers: headers
            }
        );
    },
    signup: function (send) {
        return axios.post(`${apiUrl}/user/signup`, send, { headers: headers });
    },
    isAuthenticated: function () {
        return localStorage.getItem("token") !== null;
    },
    logout: function () {
        return localStorage.clear();
    }
};