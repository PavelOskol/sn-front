const profileReducer = (state = {
    _posts: [
        {message:"Хм, а пропсы реально круты"},
        {message:"Ну ка, что это за пропсы такие?"},
        {message:"Хэлоу ворлд"}
    ],
    _currentPost: "",
}, action) => {
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
        /*case "GET-CURRENT-POST-TEXT":
            return state._currentPost;
            break;
        case "GET-POSTS" :
            return state._posts;
            break;*/
    }
    return state;
}

export default profileReducer;