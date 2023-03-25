export default function usersReducer(state ={users: []}, action) {
    switch (action.type) {
        case "FOLLOW":
            return {
                users: [...state.users.map( u => {
                    if (u.id === action.id) u.followed = true;
                    return u;
                })],
            }
        case "UNFOLLOW":
            return {
                users: [...state.users.map( u => {
                    if (u.id === action.id) u.followed = false;
                    return u;
                })],
            }
        case "SET-USERS":
            return  {
                users: [...action.users]
            }
        default:
            return state;
    }
}