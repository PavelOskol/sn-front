import {useDispatch, useSelector} from "react-redux";
import {loginExecutorThunk} from "../../../redux/reducers/authorized";
import {useNavigate} from "react-router-dom"
import {useEffect} from "react";
import {Field, Form} from "react-final-form";
import {
    loginValidator,
    passwordValidator,
} from "../../../redux/validators/validators";

export default function LoginPage() {

    const loginStatus = useSelector( state => state.Authorized.isAuthorized);
    useEffect( ()=> loginStatus ? navigate('/profile') : undefined  , [loginStatus])    //при смени логин статуса, перенаправлять на профиль

    const dispatch = useDispatch();
    const navigate = useNavigate();
    //при сабмите формы вызывать санку
    const submitHandler = async (values) => {
        dispatch( loginExecutorThunk(values.login, values.plane_password) )
    }

    return <div>
        <Form onSubmit={submitHandler}
                render={({ handleSubmit, submitting})=> (
        <form
              onSubmit={handleSubmit}
        >
            <h1> Логинизация</h1>
            <Field name="login"
                   validate={loginValidator}
            >
                {({ input, meta }) => (
                <div>
                    <input {...input} type="text" placeholder="login" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
                )}
            </Field>
            <Field name={"plane_password"}
                    validate={passwordValidator}
            >
                {({input, meta})=>(
                    <div>
                <input {...input} type="password" placeholder={"password"} />
                {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
            )}
            </Field>

            <input type={"submit"} value={"Залогиниться"} disabled={submitting}/>
        </form>

                )}
        />
    </div>
}