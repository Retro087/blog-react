import React, { useState } from "react";
import s from "./Header.module.css"
import arrow from "../../Assets/img/arrow.png"
import { NavLink } from "react-router-dom";

let Header = (props) => {
    const [isClicked, setClicked] = useState(false)
    const [search, setSearch] = useState('')
    let onChange = (e) => {
        let value = e.target.value
        setSearch(value)
    }

    return (
        <div className={s.Header}>
            <nav>
                <ul className={s.menuList}>
                    <NavLink to='/home'>
                        <li className={s.itemBlock}>
                            Главная
                        </li>
                    </NavLink>
                    <li onClick={() => { setClicked(!isClicked) }} id={isClicked ? s.blogs : ''} className={s.itemBlock}>
                        Статьи
                        <img className={isClicked ? '' : s.arrowDeactive} src={arrow} alt="" />
                        <ul className={isClicked ? s.menuActive : s.menuDeactive}>
                            <li className={s.menuItem}><a className={s.menuItem_link} >Создание сайтов</a></li>
                            <li className={s.menuItem}><a className={s.menuItem_link} >Интернет-маркетинг</a></li>
                            <li className={s.menuItem}><a className={s.menuItem_link} >Продвижение видео</a></li>
                            {props.isAuth ? <NavLink to={'/CreatePost'}><li className={s.menuItem}><p className={s.menuItem_link} >Написать статью</p></li></NavLink> : null}
                        </ul>
                    </li>
                    <li className={s.itemBlock}>
                        Обо мне
                    </li>
                    <li id={s.reklama} className={s.itemBlock}>
                        Реклама
                    </li>
                    <NavLink to={"/profile"}>
                        <li className={s.itemBlock}>
                            Профиль
                        </li>
                    </NavLink>
                    <li className={s.inputWrapper}>
                        <input value={search} onChange={onChange} className={s.input} type="text" placeholder="Поиск по блогу" />
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header