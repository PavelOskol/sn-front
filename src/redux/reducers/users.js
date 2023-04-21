export default function usersReducer(state ={
    users: [],
    currentPage: 1,
    usersCount: 0,
    isFetching: false,
    fetchingFriends: [],
}, action) {
    switch (action.type) {
        case "SET-USERS":
            return  {
                ...state,
                users: [...action.users]
            }
        case "SET-USERS-COUNT":
                return {
                    ...state,
                    usersCount: action.count
                };
        case "SET-PAGE":
                return {
                    ...state,
                    currentPage: action.page,
                }
        case "FETCHING":
            return {
                ...state,
                isFetching: !(state.isFetching)
            }
        case "ADD-FETCHING_FRIEND":
            return {
                ...state,
                fetchingFriends: [...state.fetchingFriends, action._id]
            }
        case "DEL-FETCHING_FRIEND":
            return {
                ...state,
                fetchingFriends: state.fetchingFriends.filter( id => id !== action._id )
            }
        default:
            return state;
    }
};

export function setUsers(users) {
    return {type: "SET-USERS", users}
}
export function setUsersCount(count) {
    return {type: "SET-USERS-COUNT", count}
}
export function setUsersPage (page) {
    return { type: "SET-PAGE", page}
}
export function setFetching () {
    return {type: "FETCHING"}
}

export function addFetchingFriend (_id) {
    return {type: "ADD-FETCHING_FRIEND", _id}
}
export function delFetchingFriend (_id) {
    return {type: "DEL-FETCHING_FRIEND", _id}
}