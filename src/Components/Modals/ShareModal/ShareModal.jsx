import React from "react";
import s from "./ShareModal.module.css"
import vk from "../../../Assets/img/social-networks/vk2.svg"
import twitter from "../../../Assets/img/social-networks/twitter.svg"
import copy from "../../../Assets/img/social-networks/copy.svg"
import facebook from "../../../Assets/img/social-networks/facebook.svg"
import close from "../../../Assets/img/preview/close.png"

let ShareModal = (props) => {
     if (!props.show) {
        return null;
    }

    return (
        <div className={s.shareModalWrapper}>
            <div className={s.shareModal}>
                <div onClick={props.closeModal} className={s.close}><img src={close} alt="" /></div>
                <div className={s.shareBody}>
                    <div onClick={props.closeModal} className={s.shareItem}><img src={facebook} alt="" /></div>
                    <div onClick={props.closeModal} className={s.shareItem}><img src={twitter} alt="" /></div>
                    <div onClick={props.closeModal} className={s.shareItem}><img src={vk} alt="" /></div>
                    <div onClick={props.closeModal} className={s.shareItem}><img src={copy} alt="" /></div>
                </div>
            </div>
        </div>
    )
}

export default ShareModal