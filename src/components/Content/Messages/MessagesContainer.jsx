import {sendMessage,changesNewMessage} from "../../../redux/reducers/dialogs";
import Messages from "./Messages";
import {connect} from "react-redux";

    const mapStateToProps = (state) => (
        {
            dialogs: state.DialogsPage._dialogItems,
            messages: state.DialogsPage._messages,
            currentMessage: state.DialogsPage._currentText,
        }
    );

    const mapDispatchToProps = (dispatch) => (
        {
            sendMessage: () => dispatch( sendMessage() ),
            changeTextarea: (element) => dispatch( changesNewMessage(element.target.value) ),
        }
    )

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;