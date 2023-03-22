import {actionCreators} from "../../../../redux/action-creator";
import MyPosts from "./MyPosts";


export default function MyPostsContainer({dispatch,ProfilePage}) {
    //const Posts = props.dispatch( actionCreators.getPosts() ).map(post => <Post message={post.message}/>)

    const addPost = () => dispatch( actionCreators.addPost() );
    const changeTextarea = (element) => dispatch( actionCreators.changesNewPostText( element.target.value ));
    //const onTextAreaClick = () => dispatch( actionCreators.changesNewPostText("Click-Click") );
    //const currentPost = () => props.dispatch( actionCreators.getCurrentPostText() );
    const currentPost = () => ProfilePage._currentPost;

    return <MyPosts {...{Posts: ProfilePage._posts,addPost,changeTextarea,currentPost}} />
}