import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./reducers/profile";
import dialogsReducer from "./reducers/dialogs";


const reducersObj = {
    DialogsPage: dialogsReducer,
    ProfilePage: profileReducer,
}
const reducers = combineReducers(reducersObj);
const store = createStore(reducers);


window.store = store;
export default store

