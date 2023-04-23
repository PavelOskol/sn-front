import s from "./Users.module.css"
import Loading from "../../common/Loading";
import {NavLink, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useSelector} from "react-redux";



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
                  fetchingFriends,
                  changeFriendStatusThunk
              }
) => {
    //берем из стэйта друзей текущего пользователя
    const myFriends = useSelector(state => state.ProfilePage.profile.friends,);
    const myOutgoingFriendRequests = useSelector(state => state.ProfilePage.profile.outgoing_friend_requests);
    const myIncomingFriendRequests = useSelector(state => state.ProfilePage.profile.incoming_friend_requests);

    //определяем статус "друга", исходя из того есть ли он у текущего пользователя в друзьях
    let userFriendStatus;
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

    //узнаем айди текущего пользователя из стэйта
    const MY_ID = useSelector(state => state.Authorized._id)

    //вешаем колбэк на кнопку, который вызывает санку удаления/добавления друга,
    //в зависимости от текущего статуса "друга"
    const buttonClick = () => userFriendStatus === "Friend" || userFriendStatus === "Subscribed"
        ? changeFriendStatusThunk(_id, "DELETE")
        : changeFriendStatusThunk(_id, "ADD");

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
    const isAuthorized = useSelector(state => state.Authorized.isAuthorized)

    //при каждой смене currentPage запрашиваем актуальных друзей, и обновляем их в стейт. На случай если кто то нас добавил в промежутках
    useEffect(() => {
        //если мы не авторизованы - уходим на логин
        if (!isAuthorized) return navigate('/login')

        //вызываем Санку обновления списка друзей
        props.refreshFriendsThunk();
    }, [props.currentPage]);

    //мапируем юзеров из стейта, превращая их в разметку,
    //помимо полей юзера, передаем массив "обрабатывающихся" друзей
    //и санку для обработки - добавления/удаления друга
    const users = props.users.map(user => <User key={user._id}
                                                {...user}
                                                fetchingFriends={props.fetchingFriends}
                                                changeFriendStatusThunk={props.changeFriendStatusThunk}
    />)


    //считаем к-во страниц юзеров, создаем массив с номерами страниц
    const pagesCount = Math.ceil(props.usersCount / 5);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    //мапируем номера страниц, превращая их в спан ссылки
    pages = pages.map(num =>
        <span key={num}
              className={props.currentPage === num ? s.selectedPage : null}
              onClick={() => props.setPageThunk(num)}>
                {num}
            </span>)

    //рисуем это дерьмо
    return (
        <div className={s.content}>
            { props.isFetching ?
                <Loading/>
                : <>
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
