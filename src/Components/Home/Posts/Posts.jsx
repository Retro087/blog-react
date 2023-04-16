import React, { useState } from "react";
import Post from "./Post/Post";
import s from "./Posts.module.css"
import sendBtn from "../../../Assets/img/preview/send btn.png"
let Posts = (props) => {

    let posts = props.posts.map((el) => {
        return <Post key={el.id} img={props.img} id={el.id} date={el.date} title={el.title} text={el.text} tags={el.tags} />
    })

    const [inputValue, setInputValue] = useState('')
    const [invalidValue, setInput] = useState(false)

    let onSend = () => {
        let date = new Date()
        let nowDate = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
        let id = props.posts[props.posts.length - 1].id + 1
        if (!inputValue) {
            setInput(true)
            setTimeout(()=> {setInput(false)}, 1000)
        } else {
            props.addPost(inputValue, nowDate, id)
            setInput(false)
            setInputValue('')
        }
    }
    

    return (
        <div className={s.postsWrapper}>
            <div className={s.inputWrapper}>
                <input value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} className={invalidValue ? s.invalid : s.input} type="text" placeholder={invalidValue? "Чтобы создать пост, введите текст":"Напишите что-нибудь"} />
                <a className={s.sendBtn} onClick={onSend}><img src={sendBtn} /></a>
            </div>
            <div>
                {posts}
            </div>
        </div>
    )
}

export default Posts