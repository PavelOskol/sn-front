import React from "react";
import s from "./Post.module.css"

export default function Post(props) {
    return <div className={s.content}>
        <img src={"/img/ava.jpg"} alt={"ava"}/>
        {props.message}
    </div>
}