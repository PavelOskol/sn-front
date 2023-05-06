import {registrationExecutorThunk} from "../../../redux/reducers/authorized";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {Field, Form} from "react-final-form";
import s from "../../../redux/validators/validators.module.css"


export default function RegistrationPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loginStatus = useSelector( state => state.Authorized.isAuthorized);
    useEffect( ()=> loginStatus ? navigate('/profile') : undefined  , [loginStatus])    //при смени логин статуса, перенаправлять на профиль

    const submitHandler = async (values) => {
    //alert(JSON.stringify(values))
        dispatch( registrationExecutorThunk(values.login, values.plane_password) )
    }

    return <Form onSubmit={submitHandler}
                 validate={values => {
                     const errors = {}
                     if (!values.login) {
                         errors.login = 'Required'
                     } else if (values.login.length < 3) {
                         errors.login = "Min length: 3 symbols"
                     } else if (values.login.length > 16) {
                         errors.login = "Min length: 16 symbols"
                     }

                     if (!values.plane_password) {
                         errors.plane_password = 'Required'
                     } else if (values.plane_password.length < 6) {
                         errors.plane_password = "Min length: 3 symbols"
                     } else if (values.plane_password.length > 16) {
                         errors.plane_password = "Min length: 16 symbols"
                     }

                     if (!values.confirm) {
                         errors.confirm = 'Required'
                     } else if (values.confirm !== values.plane_password) {
                         errors.confirm = 'Must match'
                     }
                     return errors
                 }}
                 render={({ handleSubmit, submitting})=>(<div>
        <form onSubmit={handleSubmit}>
            <h1>Регистрация</h1>
            <Field name="login" >
                {({input, meta})=>(
                    <div className={meta.error && meta.touched ? s.error : ""} >
                        <input {...input} type={"text"} placeholder={"login"} />
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                )}
            </Field>
            <Field name="plane_password" >
                {({input, meta})=>(
                    <div className={meta.error && meta.touched ? s.error : ""}>
                        <input {...input} type="password" placeholder="Password" />
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                )}
            </Field>
            <Field name="confirm" >
                {({ input, meta }) => (
                    <div className={meta.error && meta.touched ? s.error : ""}>
                        <input {...input} type="password" placeholder="Confirm" />
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                )}
            </Field>

            <input type={"submit"} value={"Зарегаться"} disabled={submitting}/>
        </form>
    </div>
        )}
    />
}