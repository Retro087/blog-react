import React, { useState } from "react";
import s from "./ContactModal.module.css"
import close from "../../../Assets/img/preview/close.png"
let ContactModal = (props) => {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')

    if (!props.show) {
        return null;
    }

    return (
        <div className={s.contactModalWrapper}>
            <div className={s.contactModal}>
                <div className={s.close}>
                    <a onClick={props.closeModal}><img src={close} alt="" /></a>
                </div>
                <form className={s.contactForm} action="">
                    <div className={s.contactModalItem}><input onChange={(e) => {setName(e.target.value)}} className={s.contactModalInput} type="text" placeholder="Ваше имя" /></div>
                    <div className={s.contactModalItem}><input onChange={(e) => {setEmail(e.target.value)}} className={s.contactModalInput} type="text" placeholder="Ваш e-mail" /></div>
                    <div className={s.contactModalItem}><input onChange={(e) => {setText(e.target.value)}} className={s.contactModalInput} type="text" placeholder="Текст сообщения" /></div>
                    <button onClick={props.closeModal} className={s.contactSend}>Отправить</button>
                </form>
                <div>
                    <p></p>
                    <p></p>
                </div>

            </div>


        </div>
    )
}

export default ContactModal