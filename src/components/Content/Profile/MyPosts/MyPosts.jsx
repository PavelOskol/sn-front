import s from "./MyPosts.module.css"
import Post from "./Post/Post";


export default function MyPosts({
                                    _posts,
                                    addPost,
                                    changesNewPostText,
                                    _currentPost
                                }) {
    _posts = _posts.map(post => <Post key={post._id} message={post.message}/>);
    const keyPress = (e) => e.key === 'Enter' && e.shiftKey ? addPost() : null;

    return (
        <div className={s.content}>
            My posts
            <div className={s.ProfileBlock}>
                <textarea value={_currentPost}
                          onChange={changesNewPostText}
                          placeholder={"New post"}
                          onKeyUp={keyPress}
                />
            </div>
            <div className={s.ProfileBlock}>
                <button onClick={addPost}>Add post</button>
            </div>
            {_posts}
        </div>
    )
}