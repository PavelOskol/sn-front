import s from "./Users.module.css"
import Loading from "../../common/Loading";
import {NavLink, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import axios from "axios";


const User = ({
                  //ПРинимаем пропсы
                  _id = "",
                  login,
                  ava = {
                      smallAva: "/img/default-user.png"
                  },
                  name = "Без имени",
                  surname = "Без фамилии",
                  selfDescription = "И о себе ничего не указал",
                  location = {cityName: "", countryName: ""},
                  refreshFriends,
                  token,
                  addFetchingFriend,
                  delFetchingFriend,
                  fetchingFriends,
              }) => {

    //берем из стэйта друзей текущего пользователя
    let userFriendStatus;
    const myFriends = useSelector(state => state.ProfilePage.profile.friends,);
    const myOutgoingFriendRequests = useSelector(state => state.ProfilePage.profile.outgoing_friend_requests);
    const myIncomingFriendRequests = useSelector(state => state.ProfilePage.profile.incoming_friend_requests);

    //определяем статус юзера, исходя из того есть ли он у текущего пользователя в друзьях
    if (myFriends.includes(_id)) {
        userFriendStatus = "Friend";
    } else {
        if (myOutgoingFriendRequests.includes(_id)) {
            userFriendStatus = "Subscribed";
        } else {
            if (myIncomingFriendRequests.includes(_id)) {
                userFriendStatus = "Follower";
            } else
                userFriendStatus = "Stranger"
        }
    }

    //определяем сайдэффект функцию, которая будет вызвана по нажатию на кнопку - добавить/удалить друга
    //функция делает запрос на сервак, принимает список друзей, и обновляет его в стейте
    const changeFriendStatus = async (_id, effect) => {
        let friends;
        addFetchingFriend(_id);                     // дисэйблим кнопку- добавляем айди пользователя в стейт
        await axios.put('/api/friend_request', {
            addFriend: effect === "add",
            deleteFriend: effect === "delete",
            friend_id: _id
        },{headers: {"Authorization": "Bearer " + token}}
            ).then(req => {
            friends = req.data.success ? req.data.me : null;
            refreshFriends(friends);                      //диспатчим обновленный список друзей в стейт
            delFetchingFriend(_id);                  //энейблим кнопку - удаляем айди пользователя из стейта
        }).catch(e => console.log(e.message));

    }

    const MY_ID = useSelector(state => state.Authorized._id)        //узнаем айди текущего пользователя из стэйта

    //вешаем колбэк удаления/добавления друга на кнопку, в зависимости от текущего статуса юзера
    const buttonClick = () => userFriendStatus === "Friend" || userFriendStatus === "Subscribed" ? changeFriendStatus(_id, "delete") : changeFriendStatus(_id, "add");
    //пишем на кнопку то что она делает
    const buttonLabel = userFriendStatus === "Friend" ? "Удалить из друзей" :
        userFriendStatus === "Subscribed" ? "Отменить заявку" :
        userFriendStatus === "Follower" ? "Принять заявку" :
        userFriendStatus === "Stranger" ? "Добавить в друзья": "error: unknown status"

    //рисуем это дерьмо
    return <div className={s.user}>
        <div className={s.ava}>
            {/*не ресуем кнопку если юзер это текущий пользователь*/}
            {_id !== MY_ID ?
                <input type="button"
                       value={buttonLabel}
                       onClick={buttonClick}
                       disabled={fetchingFriends.includes(_id)}
                />
                : <></>
            }
            <NavLink to={"/profile/" + _id}>
                <img src={ava.smallAva} alt={"ava"}/>
            </NavLink>
        </div>
        <div>
            <div>{login}</div>
            <div>{name + " " + surname}</div>
            <div className={s.selfDescription}> Self description: {selfDescription} </div>
        </div>
        <div>
            <div> {location.cityName}</div>
            <div> {location.countryName} </div>
        </div>
    </div>
}


export default function Users(props) {

    let navigate = useNavigate();
    const token = useSelector(state => state.Authorized.token);
    const isAuthorized = useSelector(state => state.Authorized.isAuthorized)
    //при каждой смене currentPage запрашиваем актуальных друзей, и обновляем их в стейт. На случай если кто то нас добавил в промежутках
    useEffect(() => {
        //если мы не авторизованы - уходим на логин
        if (!isAuthorized) return navigate('/login')
        //запрашиваем, then диспатчим рефреш
        axios.get('/api/friends/', {headers: {"Authorization": "Bearer " + token}})
            .then(res => {
                if (!res) throw new Error("No request");
                props.refreshFriends(res.data);
            }).catch(e => console.log(e.message));
    }, [props.currentPage]);
    //мапируем юзеров из стейта, превращая их в разметку
    const users = props.users.map(user => <User key={user._id}
                                                {...user}
                                                fetchingFriends={props.fetchingFriends}
                                                addFetchingFriend={props.addFetchingFriend}
                                                delFetchingFriend={props.delFetchingFriend}
                                                refreshFriends={props.refreshFriends}
                                                token={token}
    />)

    //считаем к-во страниц юзеров, создаем массив с номерами страниц
    const pagesCount = Math.ceil(props.usersCount / 5);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    //мапируем номера страниц, превращая их в спан ссылки
    pages = pages.map(num =>
        <span className={props.currentPage === num ? s.selectedPage : null}
              onClick={() => props.setPage(num)}>
                {num}
            </span>)

    //рисуем это дерьмо
    return (
        <div className={s.content}>
            {props.isFetching ?
                <Loading/> :
                <>
                    <div className={s.pages}>
                        {pages}
                    </div>
                    <div className={s.users}>
                        {users}
                    </div>
                </>}
        </div>
    )
}
