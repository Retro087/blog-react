import React from "react";
import s from "./MyWork.module.css"
import { Navigate } from "react-router";

let MyWork = (props) => {
    if(props.nothing){
        return (
            <div>
                Вы еще не добавили работы
            </div>
        )
    }
    return (
        <div className={s.myWorkWrapper}>
            <img src={props.img} alt="" />
            <div className={s.myWorkInfo}>
                <h1 className={s.workTitle}>{props.title}</h1>
                <p className={s.workDescript}>{props.description}</p>
                <div className={s.workTags}>
                    {props.tags.map((el) => {
                        return <div key={props.id} className={s.tag}>
                            <p>{el}</p>
                        </div>
                    })}
                </div>
                <div className={s.btnWrapper}>
                    <button className={s.btn}>Перейти на сайт</button>
                </div>
            </div>
        </div>
    )
}

export default MyWork