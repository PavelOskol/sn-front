import React from "react";
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {connect} from "react-redux";
import {addPost,changesNewPostText,setProfile} from "../../../redux/reducers/profile";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";


//создаем функцию обертку, которая расширяет принемаемый класс.
// Использует хук useParams, который вычленяет :параметры из урла и сохраняет их в пропс - router
//navigate - сохраняем эту функцию в router. Она меняет урл
function routeWrapper (Component) {
    function AddedProps(props) {
        let params = useParams();
        let navigate = useNavigate();
        return <Component {...props} router={{params,navigate}}/>
    }
    return AddedProps;
}

//Классовая контейнерная компонента,
//Создана для выполнения сайд эффектов, в частности: запрос на сервер при вмонтировании её в dom
//И переадресации на логин если мы не залогинены
//Благодаря роут обертке, "следит" за урл
class ProfileMiddleware extends React.Component {
    componentDidMount() {
        if (!this.props.isAuthorized) return this.props.router.navigate('/login')
        if (!this.props.router.params.userId ) this.props.router.params.userId = this.props._id;
        axios.get('/api/profile/' + this.props.router.params.userId)
            .then(res => {
                this.props.setProfile(res.data.entries);
                debugger
            });
    }

    render() {
        return <div className={s.content}>
        <ProfileInfo {...this.props.profile} />
        <MyPosts {...this.props} />
    </div>
    }
}

const mapStateToProps = (state) => ({
    ...state.ProfilePage,
    isAuthorized: state.Authorized.isAuthorized,
    _id: state.Authorized._id,
});
const mapDispatchToProps = {addPost,
    changesNewPostText: (e) => changesNewPostText(e.target.value) ,
    setProfile
}

const ProfileContainer = connect(mapStateToProps,mapDispatchToProps)(routeWrapper(ProfileMiddleware));
export default ProfileContainer;