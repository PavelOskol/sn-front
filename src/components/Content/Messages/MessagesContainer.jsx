import {actionCreators} from "../../../redux/action-creator";
import Messages from "./Messages";
import {connect} from "react-redux";


/*
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
   };*/

    const mapStateToProps = (state) => (
        {
            dialogs: state.DialogsPage._dialogItems,
            messages: state.DialogsPage._messages,
            currentMessage: state.DialogsPage._currentText,
        }
    );

    const mapDispatchToProps = (dispatch) => (
        {
            sendMessage: () => dispatch( actionCreators.sendMessage() ),
            changeTextarea: (element) => dispatch( actionCreators.changesNewMessage(element.target.value) ),
        }
    )

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;