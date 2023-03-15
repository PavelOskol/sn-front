import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";


export default function MyPosts(props) {
    const newPost = React.createRef();
    const Posts = props.ProfilePage.posts.map(post => <Post message={post.message}/>)
    const addPost = () => props.ProfilePage.addPost();
    const changeTextarea = () => props.ProfilePage.changeTextarea(newPost.current.value);
    const textAreaClick = () => props.ProfilePage.changeTextarea("");


    return (
        <div className={s.content}>
            My posts
            <div className={s.ProfileBlock}>
                <textarea ref={newPost} value={props.ProfilePage.currentPost} onClick={textAreaClick} onChange={changeTextarea}/>
            </div>
            <div className={s.ProfileBlock}>
                <button onClick={addPost}>Add post</button>
            </div>
            {Posts}
        </div>
    )
}