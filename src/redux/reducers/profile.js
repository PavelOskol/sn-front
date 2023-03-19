const profileReducer = (state, action) => {
    switch (action.type) {
        case "ADD-POST":
            state._posts.push(
                {
                    message: state._currentPost
                }
            )
            state._currentPost = "";
            break;
        case "CHANGES-NEW-POST-TEXT":
            state._currentPost = action.text;
            break;
        case "GET-CURRENT-POST-TEXT":
            return state._currentPost;
            break;
        case "GET-POSTS" :
            return state._posts;
            break;
    }
    return state;
}

export default profileReducer;