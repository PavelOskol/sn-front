import s from "./Sidebar.module.css"
import {NavLink} from "react-router-dom";

export default function Sidebar() {
    return <nav className={s.sidebar}>
        <NavLink to="/profile" className={navData => navData.isActive ? s.active : s.sidebar}> Profile </NavLink>
        <NavLink to="/messages" className={navData => navData.isActive ? s.active : s.sidebar}> Messages </NavLink>
        <NavLink to="/users" className={navData => navData.isActive ? s.active : s.sidebar}> Users </NavLink>
        <NavLink to="/news" className={navData => navData.isActive ? s.active : s.sidebar}>News</NavLink>
        <br/>
        <NavLink to="/music" className={navData => navData.isActive ? s.active : s.sidebar}>Music</NavLink>
        {/*<a href="src/components#music">Options</a>*/}
    </nav>
}
