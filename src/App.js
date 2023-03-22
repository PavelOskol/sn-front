import './App.css';
import Header from "./components/Head/Head";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Content/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/Content/News/News";
import Music from "./components/Content/Music/Music";
import MessagesContainer from "./components/Content/Messages/MessagesContainer";


function App(props) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Sidebar/>

                <Routes>
                    <Route path="/profile" element={<Profile dispatch={props.dispatch} ProfilePage={props.store.ProfilePage}/> }/>
                    <Route path="/" element={<Profile dispatch={props.dispatch} ProfilePage={props.store.ProfilePage}/> }/>
                    <Route path="/messages/*" element={<MessagesContainer dispatch={props.dispatch} DialogsPage={props.store.DialogsPage}/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    {/*<Route path="/messages" element={<Messages/>}/>*/}
                </Routes>

            </div>
        </BrowserRouter>
    );
}

export {App} ;
