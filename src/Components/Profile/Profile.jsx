import React, { useState } from "react";
import s from "./Profile.module.css"

let Profile = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [name, setName] = useState(props.name)
    const [email, setEmail] = useState(props.email)
    const [password, setPassword] = useState(props.password)
    
    let updateData = () => {
        props.updateAuthData(email, password, name)
        setEditMode(false)
    }

    return (    
        <div className={s.profileWrapper}>
            <h1 className={s.title}>Профиль</h1>
            <div className={s.item}>
                <p className={s.textTitle}>Имя:</p>
                {editMode ? <input value={name} autoFocus={true} className={s.input} onChange={(e) => {setName(e.target.value)}} type="text" /> : <p onClick={() => {setEditMode(true)}} className={s.text}>{props.name ? props.name : 'Введите имя'}</p>}
            </div>
            <div className={s.item}>
                <p className={s.textTitle}>Почта:</p>
                {editMode ? <input value={email} className={s.input} onChange={(e) => {setEmail(e.target.value)}} type="text" /> : <p onClick={() => {setEditMode(true)}} className={s.text}>{props.email ? props.email : 'Введите email'}</p>}
            </div>
            <div className={s.item}>
                <p className={s.textTitle}>Пароль:</p>
                {editMode ? <input value={password} className={s.input} onChange={(e) => {setPassword(e.target.value)}} type="text" /> : <p onClick={() => {setEditMode(true)}} className={s.text}>{props.password ? props.password : 'Введите пароль'}</p>}
            </div>
            {editMode ? <div><button onClick={updateData} className={s.save}>Сохранить</button></div> : null}
        </div>
    )
}

export default Profile