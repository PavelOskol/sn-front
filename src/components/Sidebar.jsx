import React from "react";
import s from "./Sidebar.module.css"

export default function Sidebar() {
    return <nav className={s.sidebar}>
        <a href="#profile">Profile</a>
        <a href="#messages">Messages</a>
        <a href="#news">News</a>
        <br/>
        <a href="#music">Music</a>
    </nav>
}
