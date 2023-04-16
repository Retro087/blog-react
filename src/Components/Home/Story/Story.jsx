import React, { useState } from "react";
import s from "./Story.module.css"
import arrow from "../../../Assets/img/preview/arrow.png"
import { NavLink } from "react-router-dom";
import StoryModal from "../../Modals/StoryModal/StoryModal";
import useModal from "../../hook/useModal";
let Story = (props) => {
    const [isShowingModal, toggleModal] = useModal()

    return (
        <div>
            <StoryModal video={props.video} show={isShowingModal} onCloseButtonClick={toggleModal}/>
            <div onClick={toggleModal} className={s.storyWrapper}>
                <img className={s.prev} src={props.preview} alt="" />
                <p className={s.title}>{props.title}</p>
                <p className={s.date}>{props.date}</p>
            </div>
        </div>
    )
}

export default Story