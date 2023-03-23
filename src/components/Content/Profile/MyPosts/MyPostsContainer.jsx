import {actionCreators} from "../../../../redux/action-creator";
import MyPosts from "./MyPosts";
import {useContext} from "react";
import {StoreContext} from "../../../../redux/redux-store";


export default function MyPostsContainer() {
    //const Posts = props.dispatch( actionCreators.getPosts() ).map(post => <Post message={post.message}/>)
    const dispatch = useContext(StoreContext).dispatch;
    const ProfilePage = useContext(StoreContext).getState().ProfilePage;
    const addPost = () => dispatch( actionCreators.addPost() );
    const changeTextarea = (element) => dispatch( actionCreators.changesNewPostText( element.target.value ));
    //const onTextAreaClick = () => dispatch( actionCreators.changesNewPostText("Click-Click") );
    //const currentPost = () => props.dispatch( actionCreators.getCurrentPostText() );
    const currentPost = () => ProfilePage._currentPost;

    return <MyPosts {...{Posts: ProfilePage._posts,addPost,changeTextarea,currentPost}} />
}