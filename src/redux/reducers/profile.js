import api from "../../DAL/api";

const profileReducer = (state = {
    _posts: [
        {_id: 1, message:"Хм, а пропсы реально круты"},
        {_id: 2, message:"Ну ка, что это за пропсы такие?"},
        {_id: 3, message:"Хэлоу ворлд"}
    ],
    _currentPost: "",
    profile: {
        incoming_friend_requests: [],
        outgoing_friend_requests:[],
    },
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
        case "CHANGE-STATUS":
            return {
                ...state,
                profile: {
                    ...state.profile,
                    status: action.status
                }
            }
        default:
            return state;
    }
}

export function loadProfileThunk(id) {
    return (dispatch, getState) => {
        api.getProfile(getState().Authorized.token, id)
            .then(data => {
                if (!data.success) throw new Error("Failure");
                dispatch( setProfile(data.entries) );
            }).catch(e => console.log(e.message));
    }
}

export function changeStatusThunk(status) {
    return (dispatch, getState) => {
        api.changeProfileStatus(getState().Authorized.token, status)
            .then(data => {
                if (!data.success) throw new Error("Failure");
                dispatch( {type: "CHANGE-STATUS", status} );
                return "success"
            }).catch(e => console.log(e.message));
    }
}

export function refreshFriendsThunk() {
    return (dispatch, getState) => {
        api.getFriends(getState().Authorized.token)
            .then(data => {
                if (!data) throw new Error("No request");
                dispatch(refreshFriends(data));
            }).catch(e => console.log(e.message));
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