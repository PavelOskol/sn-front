import axios from "axios";

const instance = axios.create({

    baseURL: "/api/"
});

const api = {

    getUsers(page,token){
        return instance.get("auth/users?page=" + page,{
            headers: {
                "Authorization": "Bearer " + token
            }
        },)
            .then(res => res.data);
    },

    registration(login,plane_password){
        return instance.post("auth/registration", {
            login,
            plane_password
        })
            .then(res => res.data)
    },

    login(login,plane_password){
        return instance.post("auth/login", {
            login,
            plane_password,
        })
            .then(res => res.data)
    },

    getProfile(token, _id){
        return instance.get("profile/" + _id, {
            headers: {"Authorization": "Bearer " + token}
        })
            .then(res => res.data)
    },

}

export default api;