import store, {subscriber} from "./redux/State";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
let app = (dispatch) => {

    root.render(
        <React.StrictMode>
            <App dispatch={dispatch}/>
        </React.StrictMode>
    );
}


app(store.dispatch.bind(store));
subscriber(app);
