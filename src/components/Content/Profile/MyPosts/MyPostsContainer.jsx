import {actionCreators} from "../../../../redux/action-creator";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


/*export default function MyPostsContainer() {
    //const Posts = props.dispatch( actionCreators.getPosts() ).map(post => <Post message={post.message}/>)
    const dispatch = useContext(StoreContext).dispatch;
    const ProfilePage = useContext(StoreContext).getState().ProfilePage;
    const addPost = () => dispatch( actionCreators.addPost() );
    const changeTextarea = (element) => dispatch( actionCreators.changesNewPostText( element.target.value ));
    //const onTextAreaClick = () => dispatch( actionCreators.changesNewPostText("Click-Click") );
    //const currentPost = () => props.dispatch( actionCreators.getCurrentPostText() );
    const currentPost = () => ProfilePage._currentPost;

    return <MyPosts {...{Posts: ProfilePage._posts,addPost,changeTextarea,currentPost}} />
}*/

const MapStateToProps = (state) => (
    {
        posts: state.ProfilePage._posts,
        currentPost: state.ProfilePage._currentPost,
    }
);
const MapDispatchToProps = (dispatch) => (
    {
        addPost: () => dispatch( actionCreators.addPost() ),
        changeTextarea: (element) => dispatch( actionCreators.changesNewPostText( element.target.value )),
    }
);

const MyPostsContainer = connect(MapStateToProps,MapDispatchToProps)(MyPosts);

export default MyPostsContainer