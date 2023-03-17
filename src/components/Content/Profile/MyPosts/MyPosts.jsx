import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";


export default function MyPosts(props) {
    const newPost = React.createRef();
    const Posts = props.dispatch({type:"GET-POSTS"}).map(post => <Post message={post.message}/>)
    const addPost = () => props.dispatch({type:"ADD-POST"});
    const changeTextarea = () => props.dispatch({type:"CHANGES-NEW-POST-TEXT", text: newPost.current.value});
    const textAreaClick = () => props.dispatch({type:"CHANGES-NEW-POST-TEXT", text: ""});
    const currentPost = () => props.dispatch({type:"GET-CURRENT-POST-TEXT"});

    return (
        <div className={s.content}>
            My posts
            <div className={s.ProfileBlock}>
                <textarea ref={newPost} value={currentPost()} onClick={textAreaClick} onChange={changeTextarea}/>
            </div>
            <div className={s.ProfileBlock}>
                <button onClick={addPost}>Add post</button>
            </div>
            {Posts}
        </div>
    )
}