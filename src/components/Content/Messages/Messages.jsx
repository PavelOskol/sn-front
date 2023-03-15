import React from "react";
import s from "./Messages.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/messages/" + props.id}
                     className={navData => navData.isActive ? s.active : s.dialog}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}
export default function Messages(props) {
    const dialogItems = props.DialogsPage.dialogItems.map(item => <DialogItem id={item.id} name={item.name}/>);
    const messages = props.DialogsPage.messages.map(message => <Message message={message.message}/>);
    const message = React.createRef();
    const sendMessage = () => props.DialogsPage.addMessage(message.current.value);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogItems}
            </div>
            <div className={s.messages}>
                {messages}
                <div>
                    <textarea ref={message} defaultValue={""} />
                </div>
                <div>
                    <button onClick={sendMessage}>Отправить мэссаге</button>
                </div>
            </div>
        </div>
    )
};