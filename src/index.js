import store, {StoreContext} from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';

//store.dispatch({type: "initial store from reducers"})
const root = ReactDOM.createRoot(document.getElementById('root'));
const app = () => {
    root.render(
        <React.StrictMode>
            <StoreContext.Provider value={store}>
                <App />
            </StoreContext.Provider>
        </React.StrictMode>
    );
}


app();
store.subscribe(app);
