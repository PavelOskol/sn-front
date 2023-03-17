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
        switch (action.type) {
            case "ADD-POST":
                this.ProfilePage._posts.push(
                    {
                        message: this.ProfilePage._currentPost
                    }
                )
                this.ProfilePage._currentPost = "";
                sendToObservers(this.dispatch.bind(this));
                break;
            case "CHANGES-NEW-POST-TEXT":
                this.ProfilePage._currentPost = action.text;
                sendToObservers(this.dispatch.bind(this));
                break;
            case "GET-CURRENT-POST-TEXT":
                return this.ProfilePage._currentPost;
                break;
            case "SEND-MESSAGE":
                this.DialogsPage._messages.push(
                    {
                        message: this.DialogsPage._currentText
                    }
                )
                store.DialogsPage._currentText = "";
                sendToObservers(this.dispatch.bind(this));
                break;
            case "CHANGES-NEW-MESSAGE":
                store.DialogsPage._currentText = action.text;
                sendToObservers(this.dispatch.bind(this));
                break;
            case "GET-CURRENT-MESSAGE":
                return this.DialogsPage._currentText;
                break;
            case "GET-POSTS" :
                return this.ProfilePage._posts;
                break;
            case "GET-DIALOG-ITEMS":
                return this.DialogsPage._dialogItems;
                break;
            case "GET-MESSAGES":
                return this.DialogsPage._messages;
                break;
            default:
                throw new Error("Unknown action");
        }
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
