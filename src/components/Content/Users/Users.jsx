import s from "./Users.module.css"
import Loading from "../../common/Loading";
import {NavLink} from "react-router-dom";


const User = ({
                  _id = "",
                  ava = {
                      smallAva: "/img/default-user.png"
                  },
                  followed = false,
                  name,
                  surname,
                  selfDescription,
                  location = {cityName: "", countryName: ""},
                  follow,
                  unfollow
              }) => {
    const buttonText = () => followed ? "Отписаться" : "Подписаться";
    const buttonClick = () => followed ? unfollow(_id) : follow(_id);

    return <div className={s.user}>
        <div className={s.ava}>
            <input type="button"
                   value={buttonText()}
                   onClick={buttonClick}
            />
            <NavLink to={"/profile/" + _id}>
                <img src={ava.smallAva} alt={"ava"}/>
            </NavLink>
        </div>
        <div>
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

    const users = props.users.map(user => <User key={user._id}
                                                follow={props.follow}
                                                unfollow={props.unfollow}
                                                {...user}  />)

    const pagesCount = Math.ceil(props.usersCount / 5);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    pages = pages.map(num => <span className={props.currentPage === num ? s.selectedPage : null}
                                   onClick={() => props.setPage(num)}>
            {num}
            </span>)

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
