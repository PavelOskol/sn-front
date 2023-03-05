import head from "../head.jpg";
import React from "react";
import s from "./Head.module.css"

export default function Header() {
    return <header className={s.appHeader}>
            <img src={head} alt="logo"/>
    </header>
};
