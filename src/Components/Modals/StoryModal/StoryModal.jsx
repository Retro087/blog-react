import React from "react";
import s from "./StoryModal.module.css"
import close from "../../../Assets/img/preview/close.png"
import arrow from "../../../Assets/img/preview/arrow.png"
let StoryModal = (props) => {
    if (!props.show) {
        return null;
    }
        
    return (
        <div className={s.StoryModalWrapper}>
            <div className={s.StoryModal}>
                <div className={s.storyBody}>
                    <img className={s.storyVideo} src={props.video} alt="" />
                    <div className={s.storyPlay}><img src={arrow} alt="" /></div>
                </div>
                <div className={s.storyClose}>
                    <a onClick={props.onCloseButtonClick}><img src={close} alt="" /></a>
                </div>
            </div>
        </div>
    );
};
          
          
    


export default StoryModal