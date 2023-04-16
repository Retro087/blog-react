import React from "react";
import bg from "../../Assets/img/SideBarBg.jpg"
import avatar from "../../Assets/img/profile-avatar.png"
import s from "./SideBar.module.css"
import inst from "../../Assets/img/social-networks/instagram.svg"
import vk from "../../Assets/img/social-networks/vk.svg"
import pinterest from "../../Assets/img/social-networks/pinterest.svg"
import useModal from "../hook/useModal";
import ContactModal from "../Modals/ContactModal/ContactModal";

let SideBar = (props) => {
    const [isShowingModal, toggleModal] = useModal()

    return (
        <div className={s.SideBar}>
            <ContactModal show={isShowingModal} closeModal={toggleModal}/>
            <div className={s.bgWrapper}>
                <img src={bg} alt="" />
            </div>
            <div className={s.profile}>
                <div className={s.avaWrapper}>
                    <img className={s.ava} src={avatar} alt="" />
                </div>
                <div>
                    <p className={s.name}>Дмитрий Валак</p>
                    <p className={s.about}>блог front-end разработчика</p>
                    <span className={s.socialNet}>
                        <a href=""><img src={inst} alt="" /></a>
                        <a href=""><img src={vk} alt="" /></a>
                        <a href=""><img src={pinterest} alt="" /></a>
                    </span>
                </div>
            </div>
            <div className={s.line}></div>
            <div>
                <p className={s.info}>Front-end разработчик. Практик верстки<br/> сайтов.
                    Созданием сайтов занимаюсь с <br/>2012 года. Работал в нескольких ИТ<br/> компаниях и наработал более 10 000 часов в<br/> создании сайтов различной сложности.</p>
            </div>
            <div className={s.line}></div>
            <div className={s.btnWrapper}>
                <button className={s.redBtn}>Мои работы</button>
                <button onClick={toggleModal} className={s.blueBtn}>Написать мне</button>
            </div>
        </div>
    )
}

export default SideBar