import s from "./Users.module.css"
import axios from "axios";

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
            <img src={ava.smallAva} alt={"ava"}/>
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
    /*const initialUsers = [
        {
            id: 1,
            avaUrl: "/img/TsAva.jpg",
            followed: false,
            name: "Pavel",
            surname: "Ts",
            selfDescription: "I am a developer",
            location: {cityName: "Astana", countryName: "Kazakhstan"}
        },
        {
            id: 2,
            avaUrl: "/img/DkAva.webp",
            followed: true,
            name: "Igor",
            surname: "Dk",
            selfDescription: "I am a designer",
            location: {cityName: "Bugulma", countryName: "Russia"}
        },
        {
            id: 3,
            avaUrl: "/img/PtAva.jpg",
            followed: false,
            name: "Vladimir",
            surname: "Putin",
            selfDescription: "Molodec",
            location: {cityName: "Moscow", countryName: "Russia"}
        },
    ];*/


    if (props.users.length === 0) axios.get('/api/auth/users')
            .then(res => props.setUsers(res.data));

    const users = props.users.map(user => <User key={user._id}
                                                follow={props.follow}
                                                unfollow={props.unfollow}
                                                {...user}  /> )

    return <div className={s.users}>
        {users}
    </div>
}