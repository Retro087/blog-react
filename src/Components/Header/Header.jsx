import React, { useState } from "react";
import s from "./Header.module.css"
import arrow from "../../Assets/img/arrow.png"
import { NavLink } from "react-router-dom";

let Header = () => {
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
                    <li className={s.itemBlock}>
                        <NavLink to='/home'>Главная</NavLink>
                    </li>
                    <li onClick={() => {setClicked(!isClicked)}} id={isClicked ? s.blogs : ''} className={s.itemBlock}>
                        Статьи
                        <img className={isClicked ? '' : s.arrowDeactive} src={arrow} alt="" />
                        <ul className={isClicked ? s.menuActive : s.menuDeactive}>
                            <li className={s.menuItem}><a className={s.menuItem_link} href="">Создание сайтов</a></li>
                            <li className={s.menuItem}><a className={s.menuItem_link} href="">Интернет-маркетинг</a></li>
                            <li className={s.menuItem}><a className={s.menuItem_link} href="">Продвижение видео</a></li>
                        </ul>
                    </li>
                    <li className={s.itemBlock}>
                        Обо мне
                    </li>
                    <li id={s.reklama} className={s.itemBlock}>
                        Реклама
                    </li>
                    <li className={s.itemBlock}>
                        Профиль
                    </li>
                    <li className={s.inputWrapper}>
                        <input value={search} onChange={onChange} className={s.input} type="text" placeholder="Поиск по блогу" />
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header