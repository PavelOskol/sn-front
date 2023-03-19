import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';

//store.dispatch({type: "initial store from reducers"})
const root = ReactDOM.createRoot(document.getElementById('root'));
const app = (dispatch, store) => {
    root.render(
        <React.StrictMode>
            <App dispatch={dispatch} store={store}/>
        </React.StrictMode>
    );
}


app(store.dispatch.bind(store), store.getState() );
store.subscribe(() => app(store.dispatch.bind(store), store.getState()) );
