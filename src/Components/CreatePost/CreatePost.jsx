import React, { useState } from "react";
import s from "./CreatePost.module.css"
import { Navigate } from "react-router";
let CreatePost = (props) => {
    const [text, setText] = useState('')
    const [title, setTitle] = useState('')
    const [isCreated, setCreated] = useState(false)

    let onCreate = () => {
        props.addPost(text, title)
        setCreated(true)
    }   
    
    if(!props.isAuth){
        return <Navigate to={'/home'}/>
    }

    if(isCreated){
        return <Navigate to={'/home'}/>
    }

    return (
        <div className={s.postWrapper}>
            <h1 className={s.title}>Создание поста</h1>
            <div className={s.createPost}>
                <div><input onChange={(e) => {setTitle(e.target.value)}} value={title} className={s.input} type="text" placeholder="Введите название поста" /></div>
                <textarea onInput={(e) => {setText(e.target.value)}} className={s.textarea} value={text} placeholder="Введите текст"/>
                <button onClick={onCreate} className={s.createBtn}>Сохранить пост</button>
            </div>
        </div>
    )
}

export default CreatePost