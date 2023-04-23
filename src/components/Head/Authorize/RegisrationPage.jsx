import {changeLogin, changePassword, registrationExecutorThunk} from "../../../redux/reducers/authorized";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export default function RegistrationPage() {
    const login = useSelector(state => state.Authorized.login);
    const pwd = useSelector(state => state.Authorized.plane_password);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginStatus = useSelector( state => state.Authorized.isAuthorized);
    useEffect( ()=> loginStatus ? navigate('/profile') : undefined  , [loginStatus])    //при смени логин статуса, перенаправлять на профиль

    const submitHandler = async (event) => {
        event.preventDefault();
        dispatch( registrationExecutorThunk() )
    }

    return <div>
        <form onSubmit={submitHandler}>
            <h1>Регистрация</h1>
            <input type={"text"}
                   placeholder={"login"}
                   value={login}
                   onChange={e => dispatch(changeLogin(e.target.value))}
                   name="login"
            />
            <input type={"password"}
                   placeholder={"password"}
                   value={pwd}
                   onChange={e => dispatch(changePassword(e.target.value))}
                   name="plane_password"
            />
            <input type={"submit"} value={"Зарегаться"}/>
        </form>
    </div>
}