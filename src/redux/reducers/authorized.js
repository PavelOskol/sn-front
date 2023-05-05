import api from "../../DAL/api";


const authorizedReducer = (state = {
    isAuthorized: false,
    token: "",
    _id: ""
}, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                isAuthorized: true,
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

export function loginExecutorThunk (lgn, pwd) {
    return (dispatch) => {
        api.login(lgn, pwd)
            .then(data => {
                if (!data.success) throw new Error("Failure");
                dispatch(login(data.token, data._id));
                return "success"
            }).catch(e => {
                e.response.data.error ? alert( e.response.data.error ) : console.log("Unknown error")
            console.log(e);
        });
    }
}
export function registrationExecutorThunk (lgn, pwd) {
    return (dispatch) => {
        api.registration(lgn, pwd)
            .then(data => {
                if (!data.success) throw new Error("Failure");
                dispatch(login(data.token, data._id));
                return "success"
            }).catch(e => {
                alert(e.response.data.error);
        });
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


export function setToken(token) {
    return {
        type:"SET-TOKEN",
        token
    }
}
export default authorizedReducer;