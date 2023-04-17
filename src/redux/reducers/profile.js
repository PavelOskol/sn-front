const profileReducer = (state = {
    _posts: [
        {_id: 1, message:"Хм, а пропсы реально круты"},
        {_id: 2, message:"Ну ка, что это за пропсы такие?"},
        {_id: 3, message:"Хэлоу ворлд"}
    ],
    _currentPost: "",
    profile: {},
}, action) => {
    switch (action.type) {
        case "SET-PROFILE":
            return {
                ...state,
                profile: action.profile,
            }
        case "REFRESH-FRIENDS":
            return {
                ...state,
                profile: {
                    ...state.profile,
                    ...action.friends
                }
            }
        case "ADD-POST":
            return {
                ...state,
                _posts: [...state._posts, {message: state._currentPost} ],
                _currentPost: ""
            }
        case "CHANGES-NEW-POST-TEXT":
            return {
                ...state,
                _currentPost: action.text,
            }
        default:
            return state;
    }
}

export function addPost() {
    return {type:"ADD-POST"}
}
export function changesNewPostText(text) {
    return {
        type: "CHANGES-NEW-POST-TEXT",
        text
    }
}
export function setProfile(profile) {
    return {type:"SET-PROFILE", profile}
}

export function refreshFriends(friends) {
    return {type: "REFRESH-FRIENDS", friends}
}

export default profileReducer;