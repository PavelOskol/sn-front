import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./reducers/profile";
import dialogsReducer from "./reducers/dialogs";
import {createContext} from "react";

const reducersObj = {
    DialogsPage: dialogsReducer,
    ProfilePage: profileReducer,
}
const reducers = combineReducers(reducersObj);
const store = createStore(reducers);

export const StoreContext = createContext(store);
window.store = store;
export default store

