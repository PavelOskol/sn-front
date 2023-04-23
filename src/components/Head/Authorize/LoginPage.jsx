import {useDispatch, useSelector} from "react-redux";
import {changeLogin, changePassword, loginExecutorThunk} from "../../../redux/reducers/authorized";
import {useNavigate} from "react-router-dom"
import {useEffect} from "react";

export default function LoginPage() {
    const login = useSelector(state => state.Authorized.login);
    const pwd = useSelector(state => state.Authorized.plane_password);

    const loginStatus = useSelector( state => state.Authorized.isAuthorized);
    useEffect( ()=> loginStatus ? navigate('/profile') : undefined  , [loginStatus])    //при смени логин статуса, перенаправлять на профиль

    const dispatch = useDispatch();
    const navigate = useNavigate();
    //при сабмите формы вызывать санку
    const submitHandler = (event) => {
        event.preventDefault();
        dispatch( loginExecutorThunk() )
    }

    return <div>
        <form
              onSubmit={submitHandler}
        >
            <h1> Логинизация</h1>
            <input type={"text"}
                   placeholder={"login"}
                   value={login}
                   onChange={ e => dispatch(changeLogin(e.target.value)) }
                   name="login"
            />
            <input type={"password"}
                   placeholder={"password"}
                   value={pwd}
                   onChange={e => dispatch(changePassword(e.target.value))}
                   name="plane_password"
            />
            <input type={"submit"} value={"Залогиниться"}/>
        </form>
    </div>
}