import React from "react";
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {connect} from "react-redux";
import {addPost,changesNewPostText,setProfile} from "../../../redux/reducers/profile";
import axios from "axios";
import {useParams} from "react-router-dom";


//создаем функцию обертку, которая расширяет принемаемый класс. Использует хук useParams, который вычленяет :параметры из урла и сохраняет их в пропс - router
function routeWrapper (Component) {
    function AddedProps(props) {
        let params = useParams();

        return <Component {...props} router={{params}}/>
    }
    return AddedProps;
}

//Классовая контейнерная компонента,
//Создана для выполнения сайд эффектов, в частности: запрос на сервер при вмонтировании её в dom
//Благодаря роут обертке, "следит" за урл
class ProfileMiddleware extends React.Component {
    componentDidMount() {
        debugger
        if (!this.props.router.params.userId ) this.props.router.params.userId = "6425a34733bebd06e038b300";
        axios.get('/api/profile/' + this.props.router.params.userId)
            .then(res => {
                this.props.setProfile(res.data.entries);
            });
    }

    render() {
        return <div className={s.content}>
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

const ProfileContainer = connect(mapStateToProps,mapDispatchToProps)(routeWrapper(ProfileMiddleware));
export default ProfileContainer;