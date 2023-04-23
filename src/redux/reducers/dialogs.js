const dialogsReducer = (state = {
    _dialogItems:[
        {id: "1", name: "Valera"},
        {id: "2", name: "Sasha"},
        {id: "3", name: "Petya"},
        {id: "4", name: "Vasya"},
    ],
    _messages:[
        {id: "1", message:"Hi"},
        {id: "2", message:"World"},
        {id: "3", message:"I'm here"},
    ],
    _currentText: "",
}, action) => {
    switch (action.type) {
        case "SEND-MESSAGE":
           /* state._messages.push(
                {
                    message: state._currentText
                }
            )
            state._currentText = "";
            break;*/
            return {
                ...state,
                _messages: [
                    ...state._messages,
                    {message: state._currentText}
                    ],
                _currentText: "",
                };

        case "CHANGES-NEW-MESSAGE":
            return {
                ...state,
                _currentText: action.text
            };
            /*state._currentText = action.text;
            break; */
        default:
            return state;
    }
};

export function sendMessage() { return { type: "SEND-MESSAGE" } }
export function changesNewMessage(text) {
    return {
        type: "CHANGES-NEW-MESSAGE",
        text,
    }
}

export default dialogsReducer;