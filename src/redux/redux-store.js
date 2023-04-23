import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./reducers/profile";
import dialogsReducer from "./reducers/dialogs";
import usersReducer from "./reducers/users";
import authorizedReducer from "./reducers/authorized";
import thunkMiddleware from "redux-thunk"


const reducersObj = {
    DialogsPage: dialogsReducer,
    ProfilePage: profileReducer,
    UsersPage: usersReducer,
    Authorized: authorizedReducer,
}
const reducers = combineReducers(reducersObj);
const store = createStore(reducers, applyMiddleware(thunkMiddleware) );


window.store = store;
export default store

