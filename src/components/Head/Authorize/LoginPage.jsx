import {useDispatch, useSelector} from "react-redux";
import {changeLogin, changePassword, login_off, setId, setToken} from "../../../redux/reducers/authorized";
import {useNavigate} from "react-router-dom"
import axios from "axios";

export default function LoginPage() {
    const login = useSelector(state => state.Authorized.login);
    const pwd = useSelector(state => state.Authorized.plane_password);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const submitHandler = async (event) => {
        event.preventDefault();
        await axios.post("/api/auth/login", {
            login,
            plane_password: pwd
        }).then(res => {
            dispatch(setToken(res.data.token));
            dispatch(changeLogin(""));
            dispatch(changePassword(""));
            dispatch(login_off(true));
            dispatch(setId(res.data._id));
            navigate('/profile')

        }).catch(e => {
           // debugger;
            alert(e.response.data.error)
        });
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