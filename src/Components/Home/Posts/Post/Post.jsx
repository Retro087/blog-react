import React from "react";
import s from "./Post.module.css"
import { NavLink } from "react-router-dom";

let Post = (props) => {
    return (
        <NavLink to={`/textPage/${props.id}`}>
            <div className={s.postWrapper}>
                {props.img ? <img className={s.postImg} src={props.img} alt="" /> : null}
                <p className={s.postTitle}>{props.title}</p>
                <p className={s.postText}>{props.text}</p>

                <span className={s.bottomSide}>
                    <p className={s.postDate}>{props.date}</p>
                    <p className={s.postTags}>{props.tags}</p>
                    <p className={s.postLink} href="">читать</p>
                </span>
            </div>
        </NavLink>
    )
}

export default Post