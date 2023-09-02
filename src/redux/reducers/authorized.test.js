import authorizedReducer, {login, setError} from "./authorized";
//const {authorizedReducer, setError} = require('./authorized.js');

let initialState = {
    isAuthorized: false,
    authorizedError: "",
    token: "",
    _id: ""
}
test('text error should change state', () => {
    //1 test data
    let setErrorAction = setError('Test error')

    //2 computing
    let newState = authorizedReducer(initialState,setErrorAction)

    //3 expectations
    expect(newState.authorizedError).toBe('Test error');
})

test("login should change state", () => {
    let loginUserAction = login('token', '1')

    let newState = authorizedReducer(initialState, loginUserAction)

    expect(newState._id).toBe("1");
    expect(newState.token).toBe('token')
})