import s from "./MyPosts.module.css"
import Post from "./Post/Post";



export default function MyPosts({posts,addPost,changeTextarea,currentPost}) {
    posts = posts.map(post => <Post message={post.message}/>);
    const keyPress = (e) => e.key === 'Enter' && e.shiftKey ? addPost() : null;

    return (
        <div className={s.content}>
            My posts
            <div className={s.ProfileBlock}>
                <textarea value={currentPost}
                          onChange={changeTextarea}
                          placeholder={"New post"}
                          onKeyUp={keyPress}
                />
            </div>
            <div className={s.ProfileBlock}>
                <button onClick={addPost}>Add post</button>
            </div>
            {posts}
        </div>
    )
}