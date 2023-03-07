import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

export default function MyPosts() {
    return <div className={s.content}>
        My posts
        <Post />
        <Post />
        <Post />
    </div>
}