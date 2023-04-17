import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {changeLoginStatus, setId, setToken} from "../../../redux/reducers/authorized";
import {useEffect} from "react";

export default function LogoutPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(changeLoginStatus(false));
        dispatch(setToken(""));
        dispatch(setId(""));
        navigate('/login');
    })
}