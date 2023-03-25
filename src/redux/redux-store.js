import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./reducers/profile";
import dialogsReducer from "./reducers/dialogs";
import usersReducer from "./reducers/users";


const reducersObj = {
    DialogsPage: dialogsReducer,
    ProfilePage: profileReducer,
    UsersPage: usersReducer,
}
const reducers = combineReducers(reducersObj);
const store = createStore(reducers);


window.store = store;
export default store

