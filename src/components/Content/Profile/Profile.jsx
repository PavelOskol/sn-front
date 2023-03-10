import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

export default function Profile() {
    return <div className={s.content}>
        My profile
        <MyPosts />
    </div>
}