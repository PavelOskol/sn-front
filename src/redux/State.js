import render from "../render";

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



const state = {
    ProfilePage:{
        posts,
    },
    DialogsPage: {
        dialogItems,
        messages,
        addMessage: (message) => {
            state.DialogsPage.messages.push(
                {
                    message
                }
            )
            render(state);
        },
    },
    addPost : (message) => {
        state.ProfilePage.posts.push(
            {
                message
            }
        )
        render(state);
    },

}

export default state