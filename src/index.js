import state, {subscriber} from "./redux/State";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
let render = (state) => {

    root.render(
        <React.StrictMode>
            <App state={state}/>
        </React.StrictMode>
    );
}


render(state);
subscriber(render);
