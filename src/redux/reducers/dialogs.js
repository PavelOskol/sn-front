const dialogsReducer = (state, action) => {
    switch (action.type) {
        case "SEND-MESSAGE":
            state._messages.push(
                {
                    message: state._currentText
                }
            )
            state._currentText = "";
            break;
        case "CHANGES-NEW-MESSAGE":
            state._currentText = action.text;
            break;
        case "GET-CURRENT-MESSAGE":
            return state._currentText;
            break;
        case "GET-DIALOG-ITEMS":
            return state._dialogItems;
            break;
        case "GET-MESSAGES":
            return state._messages;
            break;
    }
    return state;
}

export default dialogsReducer;