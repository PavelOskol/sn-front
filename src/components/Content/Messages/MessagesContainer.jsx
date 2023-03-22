import {actionCreators} from "../../../redux/action-creator";
import Messages from "./Messages";


export default function MessagesContainer(props) {


    const sendMessage = () => props.dispatch( actionCreators.sendMessage() ); // or (message = refOnTextarea.current.value);
    const changeTextarea = (element) => props.dispatch( actionCreators.changesNewMessage(element.target.value) );
    const currentMessage = () => props.DialogsPage._currentText;



    return <Messages {...{dialogs:props.DialogsPage._dialogItems,
                            messages: props.DialogsPage._messages,
                            sendMessage,
                            changeTextarea,
                            currentMessage} } />
};