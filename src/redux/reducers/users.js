export default function usersReducer(state ={users: [],currentPage: 1, usersCount: 0, isFetching: false}, action) {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: [...state.users.map( u => {
                    if (u._id === action._id) u.followed = true;
                    return u;
                })],
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: [...state.users.map( u => {
                    if (u._id === action._id) u.followed = false;
                    return u;
                })],
            }
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
        default:
            return state;
    }
}