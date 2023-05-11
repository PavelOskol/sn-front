import React, {useLayoutEffect} from "react";
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {connect, useSelector} from "react-redux";
import {addPost, changesNewPostText, loadProfileThunk} from "../../../redux/reducers/profile";
import {useParams} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import Loading from "../../common/Loading";



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
//Перед загрузкой этой страницы вызывает санку загрузки профиля
//И переадресации на логин если мы не залогинены
//Благодаря useParams, "следит" за урл
function ProfileMiddleware(props) {
    let params = useParams();
    useLayoutEffect(() => {
        //вызываем санку загрузки профиля по id - из параметров ссылки
        //или текущего пользователя
        props.loadProfileThunk( params.userId || props._id)
        //при изменении ссылки, снова грузим профиль
    },[params.userId]);
    const isProfileFetching = useSelector(state => state.ProfilePage.profile.isFetching);

    //пока грузится профиль, рисуем крутилку
    return !isProfileFetching ? <Loading />
        : <div className={s.content}>
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
    loadProfileThunk,
}

const ProfileContainer = withAuthRedirect( connect(mapStateToProps, mapDispatchToProps)(ProfileMiddleware) );
export default ProfileContainer;