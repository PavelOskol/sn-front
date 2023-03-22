import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export default function Profile(props) {
    return <div className={s.content}>
        <ProfileInfo/>
        <MyPostsContainer {...props}/>
    </div>
}