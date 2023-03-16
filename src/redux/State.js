const posts = [
    {message:"Хм, а пропсы реально круты"},
    {message:"Ну ка, что это за пропсы такие?"},
    {message:"Хэлоу ворлд"}
]
const dialogItems = [
    {id: "1", name: "Valera"},
    {id: "2", name: "Sasha"},
    {id: "3", name: "Petya"},
    {id: "4", name: "Vasya"},
]
const messages = [
    {message:"Hi"},
    {message:"World"},
    {message:"I'm here"},
]

let render = () => {

}

export const subscriber = (observer) => {
    render = observer;
}

const state = {
    ProfilePage:{
        posts,
        currentPost: "New post",
        changeTextarea: (text) => {
            state.ProfilePage.currentPost = text;
            render(state);
        },
        addPost : () => {
            state.ProfilePage.posts.push(
                {
                    message: state.ProfilePage.currentPost
                }
            )
            state.ProfilePage.currentPost = "New post";
            render(state);
        },

    },

    DialogsPage: {
        dialogItems,
        messages,
        addMessage: () => {
            state.DialogsPage.messages.push(
                {
                    message: state.DialogsPage.currentText
                }
            )
            state.DialogsPage.currentText = "";
            render(state);
        },
        currentText: "",
        changeTextarea: (text) => {
            state.DialogsPage.currentText = text;
            render(state);

        }
    },


}

window.state = state;


export default state