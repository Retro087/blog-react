import React, { useState } from "react";
import s from "./Auth.module.css"
import { Navigate } from "react-router";

let Auth = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    let onLogin = () => {
        props.auth(email, password)
    }

    if(props.isAuth){
        return <Navigate to={"/home"}/>
    }
    
    return (
        <div className={s.authWrapper}>
            <h1 className={s.title}>Вход</h1>
            <form action="">
                <div><input value={email} onChange={(e) => {setEmail(e.target.value)}} className={s.authInput} type="email" placeholder="Email"/></div>
                <div><input value={password} onChange={(e) => {setPassword(e.target.value)}} className={s.authInput} type="password" placeholder="Пароль"/></div>
                <div className={s.btnWrapper}>
                    <button onClick={onLogin} className={s.btn}>Войти</button>
                </div>
            </form>
        </div>
    )
}

export default Auth