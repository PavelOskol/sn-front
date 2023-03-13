import React from "react";
import s from "./Messages.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/messages/" + props.id} className={navData => navData.isActive ? s.active : s.dialog}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}
export default function Messages() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id="1" name="Valera" />
                <DialogItem id="2" name="Sasha" />
                <DialogItem id="3" name="Petya" />
                <DialogItem id="4" name="Vasya" />
            </div>
            <div className={s.messages}>
                <Message message="Hi" />
                <Message message="World" />
                <Message message="I'm here" />
            </div>
        </div>
    )
};