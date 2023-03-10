import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

export default function MyPosts() {
    return <div className={s.content}>
        My posts
        <Post message="Хм, а пропсы реально круты" />
        <Post message="Ну ка, что это за пропсы такие?" />
        <Post message="Хэлоу ворлд" />
    </div>
}