import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";


export default function withAuthRedirect(WrappedComponent) {
    function RedirectedComponent(props) {
        const isAuthorized = useSelector(state => state.Authorized.isAuthorized);
        const navigate = useNavigate();
        //юз лэйаут эффект вызывает ошибку,
        //навигейт нельзя вызывать до отрисовки компонента
        useEffect( () => {
            if (!isAuthorized) {
                navigate('/login')
            }
        }, []);
        if (isAuthorized) return <WrappedComponent {...props } />

    }

    return RedirectedComponent;
}