import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";


export default function MyPosts(props) {
    const Posts = props.state.ProfilePage.posts.map(post => <Post message={post.message}/>)
    const newPost = React.createRef();
    const addPost = () => props.state.addPost(newPost.current.value);


    return (
        <div className={s.content}>
            My posts
            <div className={s.ProfileBlock}>
                <textarea ref={newPost} defaultValue={"New post"} />
            </div>
            <div className={s.ProfileBlock}>
                <button onClick={addPost}>Add post</button>
            </div>
            {Posts}
        </div>
    )
}