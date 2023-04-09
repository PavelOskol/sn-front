import s from "./Head.module.css"
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

export default function Header() {
    const Authorized = useSelector(state => state.Authorized.isAuthorized);
    return <header className={s.appHeader}>
        <img src="/img/head.jpg" alt="logo"/>
        {Authorized ?
            <NavLink to={"/logoff"}> Logoff </NavLink>
            :
            <>
                <NavLink to={"/login"}> Login </NavLink>
                <NavLink to={"/registration"}> Registration </NavLink>
            </>
        }

    </header>
};
