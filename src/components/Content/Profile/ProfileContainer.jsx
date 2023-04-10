import React, {useEffect} from "react";
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {connect, useSelector} from "react-redux";
import {addPost, changesNewPostText, setProfile} from "../../../redux/reducers/profile";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";


//создаем функцию обертку, которая расширяет принемаемый класс.
// Использует хук useParams, который вычленяет :параметры из урла и сохраняет их в пропс - router
//navigate - сохраняем эту функцию в router. Она меняет урл

/*function routeWrapper (Component) {
    function AddedProps(props) {

        return <Component {...props} router={{params,navigate}}/>
    }
    return AddedProps;
}*/

//Функциональная контейнерная компонента,
//Создана для выполнения сайд эффектов, в частности: запрос на сервер при вмонтировании её в dom
//И переадресации на логин если мы не залогинены
//Благодаря роут обертке, "следит" за урл
function ProfileMiddleware(props) {
    let params = useParams();
    let navigate = useNavigate();
    let token = useSelector( state => state.Authorized.token);
    useEffect(() => {

        if (!props.isAuthorized) return navigate('/login')
        if (!params.userId) params.userId = props._id;
        axios.get('/api/profile/' + params.userId, {headers: {"Authorization": token}})
            .then(res => {
                props.setProfile(res.data.entries);
            });
    },[])

    return <div className={s.content}>
        <ProfileInfo {...props.profile} />
        <MyPosts {...props} />
    </div>

}

const mapStateToProps = (state) => ({
    ...state.ProfilePage,
    isAuthorized: state.Authorized.isAuthorized,
    _id: state.Authorized._id,
});
const mapDispatchToProps = {
    addPost,
    changesNewPostText: (e) => changesNewPostText(e.target.value),
    setProfile
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileMiddleware);
export default ProfileContainer;