const authorizedReducer = (state = {
    isAuthorized: false,
    login: "",
    plane_password: "",
    token: "",
    _id: ""
}, action) => {
    switch (action.type) {
        case "LOGIN-LOGOFF":
            return {
                ...state,
                isAuthorized: action.isAuthorized
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
export function login_off (isAuthorized){
    return {
        type: "LOGIN-LOGOFF",
        isAuthorized
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