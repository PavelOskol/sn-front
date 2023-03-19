import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {actionCreators} from "../../../../redux/action-creator";


export default function MyPosts(props) {
    //const Posts = props.dispatch( actionCreators.getPosts() ).map(post => <Post message={post.message}/>)
    debugger
    const Posts = props.ProfilePage._posts.map(post => <Post message={post.message}/>)
    const addPost = () => props.dispatch( actionCreators.addPost() );
    const changeTextarea = (element) => props.dispatch( actionCreators.changesNewPostText( element.target.value ));
    const textAreaClick = () => props.dispatch( actionCreators.changesNewPostText("") );
    //const currentPost = () => props.dispatch( actionCreators.getCurrentPostText() );
    const currentPost = () => props.ProfilePage._currentPost;

    return (
        <div className={s.content}>
            My posts
            <div className={s.ProfileBlock}>
                <textarea value={currentPost()}
                          onClick={textAreaClick}
                          onChange={changeTextarea}
                          placeholder={"New post"}
                />
            </div>
            <div className={s.ProfileBlock}>
                <button onClick={addPost}>Add post</button>
            </div>
            {Posts}
        </div>
    )
}