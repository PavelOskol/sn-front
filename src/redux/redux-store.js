import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./reducers/profile";
import dialogsReducer from "./reducers/dialogs";
import usersReducer from "./reducers/users";
import authorizedReducer from "./reducers/authorized";


const reducersObj = {
    DialogsPage: dialogsReducer,
    ProfilePage: profileReducer,
    UsersPage: usersReducer,
    Authorized: authorizedReducer,
}
const reducers = combineReducers(reducersObj);
const store = createStore(reducers);


window.store = store;
export default store

