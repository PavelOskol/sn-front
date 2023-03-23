import {actionCreators} from "../../../redux/action-creator";
import Messages from "./Messages";
import {useContext} from "react";
import {StoreContext} from "../../../redux/redux-store";


export default function MessagesContainer() {

    const dispatch = useContext(StoreContext).dispatch
    const DialogsPage = useContext(StoreContext).getState().DialogsPage;
    const sendMessage = () => dispatch( actionCreators.sendMessage() ); // or (message = refOnTextarea.current.value);
    const changeTextarea = (element) => dispatch( actionCreators.changesNewMessage(element.target.value) );
    const currentMessage = () => DialogsPage._currentText;



    return <Messages {...{dialogs:DialogsPage._dialogItems,
                            messages: DialogsPage._messages,
                            sendMessage,
                            changeTextarea,
                            currentMessage} } />
};