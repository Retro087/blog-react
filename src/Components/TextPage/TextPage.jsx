import React from "react";
import s from "./TextPage.module.css"
import { NavLink } from "react-router-dom";
import useModal from "../hook/useModal";
import ShareModal from "../Modals/ShareModal/ShareModal";

let TextPage = (props) => {
    let page = props.posts.find(item => item.id === Number(props.router.params.pageId))
    const [isShowingModal, toggleModal] = useModal()

    return (
        <div className={s.textPageWrapper}>
            <ShareModal show={isShowingModal} closeModal={toggleModal}/>
            <div className={s.textPage}>
                <span className={s.headWrapper}>
                    <NavLink to='/home'><p className={s.littleItem}>вернуться назад</p></NavLink> 
                    <p onClick={toggleModal} className={s.littleItem}>поделиться</p>
                </span>
                <h1 className={s.title}>{page.title}</h1>
                <span className={s.underTitle}>
                    <p className={s.littleItem}>{page.date}</p>
                    <p className={s.littleItem}>{page.tags}</p>
                </span>
                <div className={s.main}>
                    <p className={s.mainText}>{page.fullText ? page.fullText : page.text}</p>
                    <img src={page.img} alt="" />
                    <p></p>
                </div>
                <div>

                </div>
            </div>

        </div>
    )
}

export default TextPage