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
    const dialogItems = dialogs.map(item => <DialogItem {...item}/>);
    messages = messages.map(message => <Message message={message.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogItems}
            </div>
            <div className={s.messages}>
                {messages}
                <div>
                    <input type={"text"}
                           value={currentMessage()}
                           onChange={changeTextarea}
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