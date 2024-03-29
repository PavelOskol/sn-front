import s from "./Messages.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = ({id, name}) => {
    return (
        <NavLink to={"/messages/" + id}
                 className={ navData => navData.isActive ? `${s.dialog} ${s.active}` : s.dialog } >
            {name}
        </NavLink>
    )
};

const Message = (props) => <div className={s.message}>{props.message}</div>

export default function Messages({dialogs, messages, currentMessage, changeTextarea, sendMessage}) {
    const dialogItems = dialogs.map(item => <DialogItem key={item.id}
                                                        {...item}/>);
    messages = messages.map(message => <Message key={message.id}
                                                message={message.message}/>);
    const keyPress = press => press.key === "Enter" ? sendMessage() : null;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogItems}
            </div>
            <div className={s.messages}>
                {messages}
                <div>
                    <input type={"text"}
                           value={currentMessage}
                           onChange={changeTextarea}
                           onKeyDown={keyPress}
                           placeholder={"Энтэр ё мэссаге"}
                    />
                </div>
                <div>
                    <button onClick={sendMessage}>Отправить мэссаге</button>
                </div>
            </div>
        </div>
    )
};