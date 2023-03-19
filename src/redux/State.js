import profileReducer from "./reducers/profile";
import dialogsReducer from "./reducers/dialogs";

const posts = [
    {message:"Хм, а пропсы реально круты"},
    {message:"Ну ка, что это за пропсы такие?"},
    {message:"Хэлоу ворлд"}
]
const dialogItems = [
    {id: "1", name: "Valera"},
    {id: "2", name: "Sasha"},
    {id: "3", name: "Petya"},
    {id: "4", name: "Vasya"},
]
const messages = [
    {message:"Hi"},
    {message:"World"},
    {message:"I'm here"},
]

let sendToObservers = () => {}

export const subscriber = (observer) => {
    sendToObservers = observer;
}

const store = {
    ProfilePage:{
        _posts:posts,
        _currentPost: "",
    },
    DialogsPage: {
        _dialogItems:dialogItems,
        _messages:messages,
        _currentText: "",
    },
    dispatch(action) {
        let answer;
        answer = profileReducer(store.ProfilePage, action);
        if (answer != store.ProfilePage) return answer

        answer = dialogsReducer(store.DialogsPage, action);
        if (answer != store.DialogsPage) return answer;

        sendToObservers(this.dispatch.bind(this));
    },
}

export const actionCreators = {
    addPost() { return {type:"ADD-POST"} },
    changesNewPostText(text) {
        return {
            type: "CHANGES-NEW-POST-TEXT",
            text
        }
    },
    getCurrentPostText(){ return {type: "GET-CURRENT-POST-TEXT"} },
    sendMessage() { return { type: "SEND-MESSAGE" } },
    changesNewMessage(text) {
        return {
            type: "CHANGES-NEW-MESSAGE",
            text,
        }
    },
    getCurrentMessage() { return {type:"GET-CURRENT-MESSAGE"} },
    getPosts() { return {type:"GET-POSTS"} },
    getDialogItems() { return {type:"GET-DIALOG-ITEMS"} },
    getMessages() { return {type:"GET-MESSAGES"} },
}

window.store = store;

export default store;
