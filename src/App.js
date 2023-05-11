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
import LogoutPage from "./components/Head/Authorize/LogoutPage";
import {login} from "./redux/reducers/authorized";
import {useDispatch} from "react-redux";
import {useLayoutEffect} from "react";


function App() {
    const dispatch = useDispatch();
    useLayoutEffect(()=> {
        const _id = localStorage.getItem("_id");
        const token = localStorage.getItem("token");
        //проверяем есть ли сохранение в локал сторэдже залогиненого пользователя
        if (_id && token) {
            //если да то - автологинимся
            dispatch(login(token, _id));
        }
    },[]
)

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Sidebar />

                <Routes>
                    <Route path="/profile/:userId" element={<ProfileContainer />}   />          {/*тут создаются params userId */}
                    <Route path="/profile/" element={<ProfileContainer />}   />
                    <Route path="/" element={<ProfileContainer />}  />

                    <Route path="/login" element={<LoginPage /> }   />
                    <Route path="/registration" element={<RegistrationPage /> }   />
                    <Route path="/logout" element={ <LogoutPage /> } />


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
