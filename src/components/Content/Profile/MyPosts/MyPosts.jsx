import s from "./MyPosts.module.css"
import Post from "./Post/Post";



export default function MyPosts({Posts,addPost,changeTextarea,currentPost}) {
    Posts = Posts.map(post => <Post message={post.message}/>)

    return (
        <div className={s.content}>
            My posts
            <div className={s.ProfileBlock}>
                <textarea value={currentPost()}
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