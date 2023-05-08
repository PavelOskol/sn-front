import api from "../../DAL/api";



const authorizedReducer = (state = {
    isAuthorized: false,
    authorizedError: "",
    token: "",
    _id: ""
}, action) => {
    switch (action.type) {
        case "SET-ERROR":
            return {
                ...state,
                authorizedError: action.error
            }
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

export function loginExecutorThunk (lgn, pwd, remember) {
    return (dispatch) => {
        api.login(lgn, pwd)
            .then(data => {
                if (!data.success) throw new Error("Failure");
                dispatch(login(data.token, data._id));
                //сохраняем в локал сторэдж, если чекнули запомнить пользователя
                if (remember) {
                    localStorage._id = data._id;
                    localStorage.token = data.token;
                }
                return "success"
            }).catch(e => {
                return e.response.data.error ?
                    dispatch( setError(e.response.data.error) )
                    :
                    dispatch(  setError("Unknown error") )
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

//Костыль для передачи ошибки из DAL в форму
//(не разобрался как stopSubmit'ить в final form)
export function setError (error) {
    return {
        type:"SET-ERROR",
        error
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