import s from "./ProfileInfo.module.css"

export default function ProfileInfo({
                                        _id,
                                        login = "Логин",
                                        name = "Имя",
                                        surname = "Фамилия",
                                        ava = {smallAva: "/img/i.webp"},
                                        selfDescription = "Обо мне",
                                        location = {countryName:"",cityName:""},
                                    }) {
    return (
        <div className={s.ProfileInfo}>
            <div>
                <img className={s.img} src={ava.smallAva} alt={"My ava"}/>
            </div>
            <div className={s.ProfileBlock}>
                <h1> {`${login} ${name} ${surname}`} </h1>
                <p> {"Self description: " + selfDescription} </p>
                <div> {`Страна: ${location.countryName}  Город: ${location.cityName}`} </div>
            </div>

        </div>
    )
}