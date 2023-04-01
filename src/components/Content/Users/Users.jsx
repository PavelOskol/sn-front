import s from "./Users.module.css"
import React from "react";
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

export default class Users extends React.Component  {
    componentDidMount() {
        axios.get('/api/auth/users')
            .then(res => this.props.setUsers(res.data));
    }

    render() {
        const users = this.props.users.map(user => <User key={user._id}
                                                    follow={this.props.follow}
                                                    unfollow={this.props.unfollow}
                                                    {...user}  />)
        return <div className={s.users}>
            {users}
        </div>
    }
}