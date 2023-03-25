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
            /*state._posts.push(
                {
                    message: state._currentPost
                }
            )
            state._currentPost = "";
            break;*/
            return {
                _posts: [...state._posts, {message: state._currentPost} ],
                _currentPost: ""
            }
        case "CHANGES-NEW-POST-TEXT":
            /*state._currentPost = action.text;
            break;*/
            return {
                ...state,
                _currentPost: action.text,
            }
        default:
            return state;
    }
}

export default profileReducer;