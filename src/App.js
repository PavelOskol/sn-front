import './App.css';
import Header from "./components/Head/Head";
import Sidebar from "./components/Sidebar/Sidebar";
import ProfileContainer from "./components/Content/Profile/ProfileContainer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/Content/News/News";
import Music from "./components/Content/Music/Music";
import MessagesContainer from "./components/Content/Messages/MessagesContainer";
import UsersContainer from "./components/Content/Users/UsersContainer";
import LoginPage from "./components/Head/Authorize/LoginPage";
import RegistrationPage from "./components/Head/Authorize/RegisrationPage";
import LogoffPage from "./components/Head/Authorize/LogoffPage";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Sidebar />

                <Routes>
                    <Route path="/profile/:userId" element={<ProfileContainer />}   />
                    <Route path="/profile/" element={<ProfileContainer />}   />
                    <Route path="/" element={<ProfileContainer />}  />

                    <Route path="/login" element={<LoginPage /> }   />
                    <Route path="/registration" element={<RegistrationPage /> }   />
                    <Route path="/logoff" element={ <LogoffPage /> } />


                    <Route path="/users" element={<UsersContainer />}   />
                    <Route path="/messages/*" element={<MessagesContainer />}   />
                    <Route path="/news" element={<News/>}   />
                    <Route path="/music" element={<Music/>} />
                    {/*<Route path="/messages" element={<Messages/>}/>*/}
                </Routes>

            </div>
        </BrowserRouter>
    );
}

export {App} ;
