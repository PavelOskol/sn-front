export const actionCreators = {
    addPost() { return {type:"ADD-POST"} },
    changesNewPostText(text) {
        return {
            type: "CHANGES-NEW-POST-TEXT",
            text
        }
    },
//    getCurrentPostText(){ return {type: "GET-CURRENT-POST-TEXT"} },
    sendMessage() { return { type: "SEND-MESSAGE" } },
    changesNewMessage(text) {
        return {
            type: "CHANGES-NEW-MESSAGE",
            text,
        }
    },
    /*    getCurrentMessage() { return {type:"GET-CURRENT-MESSAGE"} },
        getPosts() { return {type:"GET-POSTS"} },
        getDialogItems() { return {type:"GET-DIALOG-ITEMS"} },
        getMessages() { return {type:"GET-MESSAGES"} },*/
}


