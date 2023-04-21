const authorizedReducer = (state = {
    isAuthorized: false,
    login: "",
    plane_password: "",
    token: "",
    _id: ""
}, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                isAuthorized: true,
                login: "",
                plane_password: "",
                token: action.token,
                _id: action._id,
            }
        case "LOGOUT":
            return {
                ...state,
                isAuthorized: false,
                token: "",
                _id: "",
            }
        case "CHANGE_LOGIN" :
            return {
                ...state,
                login: action.login
            }
        case "CHANGE_PASSWORD":
            return {
                ...state,
                plane_password: action.plane_password
            }
        case "SET-TOKEN":
            return {
                ...state,
                token: action.token
            }
        case "SET-ID":
            return {
                ...state,
                _id: action._id
            }
        default: return state;
    }
}

export function setId (_id) {
    return {
        type: "SET-ID",
        _id
    }
}
export function login (token, _id){
    return {
        type: "LOGIN",
        token,
        _id,
    }
}

export function logout (){
    return {
        type: "LOGOUT",
    }
}

export function changeLogin (login) {
    return {
        type: "CHANGE_LOGIN",
        login
    }
}
export function changePassword (plane_password) {
    return {
        type: "CHANGE_PASSWORD",
        plane_password
    }
}

export function setToken(token) {
    return {
        type:"SET-TOKEN",
        token
    }
}
export default authorizedReducer;