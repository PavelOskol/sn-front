import './App.css';
import Header from "./components/Head/Head";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Content/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Messages from "./components/Content/Messages/Messages";
import News from "./components/Content/News/News";
import Music from "./components/Content/Music/Music";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Sidebar/>

                <Routes>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/" element={<Profile/>}/>
                    <Route path="/messages/*" element={<Messages/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    {/*<Route path="/messages" element={<Messages/>}/>*/}
                </Routes>

            </div>
        </BrowserRouter>
    );
}

export {App} ;
