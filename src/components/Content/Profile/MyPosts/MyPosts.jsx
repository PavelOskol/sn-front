import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {actionCreators} from "../../../../redux/State";


export default function MyPosts(props) {
    const newPost = React.createRef();
    const Posts = props.dispatch(actionCreators.getPosts()).map(post => <Post message={post.message}/>)
    const addPost = () => props.dispatch( actionCreators.addPost() );
    const changeTextarea = () => props.dispatch( actionCreators.changesNewPostText( newPost.current.value ));
    const textAreaClick = () => props.dispatch( actionCreators.changesNewPostText(" ") );
    const currentPost = () => props.dispatch( actionCreators.getCurrentPostText() );

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