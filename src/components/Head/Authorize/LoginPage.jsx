import {useDispatch, useSelector} from "react-redux";
import {loginExecutorThunk, setError} from "../../../redux/reducers/authorized";
import {useNavigate} from "react-router-dom"
import {useEffect} from "react";
import {Field, Form} from "react-final-form";
import {
    loginValidator,
    passwordValidator,
} from "../../../redux/validators/validators";
import s from "../../../redux/validators/validators.module.css";

export default function LoginPage() {

    const loginStatus = useSelector(state => state.Authorized.isAuthorized);
    useEffect(() => loginStatus ? navigate('/profile') : undefined, [loginStatus])    //при смени логин статуса, перенаправлять на профиль

    const submitError = useSelector(state => state.Authorized.authorizedError)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //при сабмите формы вызывать санку
    const submitHandler = async (values) => {
        dispatch(loginExecutorThunk(values.login, values.plane_password, values.checkbox))
    }

    return <div>
        <Form onSubmit={submitHandler}
              name={"Authorized"}
              render={({handleSubmit, submitting}) => (
                  <form
                      onSubmit={handleSubmit}
                  >
                      <h1> Логинизация</h1>
                      <Field name="login"
                             validate={loginValidator}
                      >
                          {({input, meta}) => (
                              <div className={meta.error && meta.touched ? s.error : ""}>
                                  <input {...input}
                                         type="text"
                                         placeholder="login"
                                         onChange={(e)=>{input.onChange(e); dispatch(setError(""))} } />
                                  {meta.error && meta.touched && <span>{meta.error}</span>}
                              </div>
                          )}
                      </Field>
                      <Field name={"plane_password"}
                             validate={passwordValidator}
                      >
                          {({input, meta}) => (
                              <div className={meta.error && meta.touched ? s.error : ""}>
                                  <input {...input}
                                         type="password"
                                         placeholder={"password"}
                                         onChange={(e)=>{input.onChange(e); dispatch(setError(""))} }/>
                                  {meta.error && meta.touched && <span>{meta.error}</span>}
                              </div>
                          )}
                      </Field>
                      <label>
                          <Field name={"checkbox"}
                                 component={"input"}
                                 type={"checkbox"}
                          />
                          Запомнить меня
                      </label>
                      {submitError && <div className={s.error}> <span> {submitError} </span> </div> }
                      <div>
                          <input type={"submit"} value={"Залогиниться"} disabled={submitting}/>
                      </div>
                  </form>

              )}
        />
    </div>
}