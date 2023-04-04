import React from "react";
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {connect} from "react-redux";
import {addPost,changesNewPostText,setProfile} from "../../../redux/reducers/profile";
import axios from "axios";

class ProfileMiddleware extends React.Component {
    componentDidMount() {
        axios.get('/api/profile/' + "6425a34733bebd06e038b300")
            .then(res => {
                this.props.setProfile(res.data.entries);
            });
    }

    render() {return <div className={s.content}>
        <ProfileInfo {...this.props.profile} />
        <MyPosts {...this.props} />
    </div>
    }
}

const mapStateToProps = (state) => ({...state.ProfilePage});
const mapDispatchToProps = {addPost,
    changesNewPostText: (e) => changesNewPostText(e.target.value) ,
    setProfile
}

const ProfileContainer = connect(mapStateToProps,mapDispatchToProps)(ProfileMiddleware);
export default ProfileContainer;