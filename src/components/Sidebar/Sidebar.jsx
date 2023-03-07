import React from "react";
import s from "./Sidebar.module.css"

export default function Sidebar() {
    return <nav className={s.sidebar}>
        <a href="src/components#profile">Profile</a>
        <a href="src/components#messages">Messages</a>
        <a href="src/components#news">News</a>
        <br/>
        <a href="src/components#music">Music</a>
    </nav>
}
