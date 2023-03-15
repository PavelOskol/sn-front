import React from "react";
import s from "./ProfileInfo.module.css"

export default function ProfileInfo() {
    return (
        <div className={s.ProfileInfo}>
            <div>
                <img className={s.img} src={"/img/i.webp"} alt={"My ava"}/>
            </div>
            <div className={s.ProfileBlock}>
                <h1> My profile </h1>
            </div>

        </div>
    )
}