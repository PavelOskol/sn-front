import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {login_off, setId, setToken} from "../../../redux/reducers/authorized";
import {useEffect} from "react";

export default function LogoffPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(login_off(false));
        dispatch(setToken(""));
        dispatch(setId(""));
        navigate('/login');
    })
}