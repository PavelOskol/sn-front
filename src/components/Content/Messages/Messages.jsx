import React from "react";
import s from "./Messages.module.css"
import {NavLink} from "react-router-dom";

export default function Messages() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    <NavLink to="/messages/1" className={navData => navData.isActive ? s.active : s.dialog}>Valera</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/messages/2" className={navData => navData.isActive ? s.active : s.dialog}>Sasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/messages/3" className={navData => navData.isActive ? s.active : s.dialog}>Petya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/messages/4" className={navData => navData.isActive ? s.active : s.dialog}> Vasya </NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello</div>
                <div className={s.message}>World</div>
                <div className={s.message}>I'm here</div>
            </div>
        </div>
    )
}