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
    follow(_id){
        return {type: "FOLLOW",_id}
    },
    unfollow(_id) {
        return {type: "UNFOLLOW",_id}
    },
    setUsers(users) {
        return {type: "SET-USERS", users}
    },
    setUsersCount(count) {
        return {type: "SET-USERS-COUNT", count}
    },
    setUsersPage (page) {
        return { type: "SET-PAGE", page}
    },
    setFetching () {
        return {type: "FETCHING"}
    }
    /*    getCurrentMessage() { return {type:"GET-CURRENT-MESSAGE"} },
        getPosts() { return {type:"GET-POSTS"} },
        getDialogItems() { return {type:"GET-DIALOG-ITEMS"} },
        getMessages() { return {type:"GET-MESSAGES"} },*/
}


