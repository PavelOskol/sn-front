import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {login} from "../../redux/reducers/authorized";

export default function withAuthRedirect(WrappedComponent) {
    function RedirectedComponent(props) {
        const isAuthorized = useSelector(state => state.Authorized.isAuthorized);
        const navigate = useNavigate();
        const dispatch = useDispatch();
        useEffect( () => {
            if (!isAuthorized) {
                const _id = localStorage.getItem("_id");
                const token = localStorage.getItem("token");
                //проверяем есть ли сохранение в локал сторэдже залогиненого пользователя
                if (_id && token) {
                    //если да то - автологинимся
                    dispatch( login(token,_id) );
                } else navigate('/login')
            }
        });
        if (isAuthorized) return <WrappedComponent {...props } />

    }

    return RedirectedComponent;
}