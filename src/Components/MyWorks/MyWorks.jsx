import React, { useState } from "react";
import MyWork from "./MyWork/MyWork";
import s from "./MyWorks.module.css"
import myWork from "../../Assets/img/myWork.png"

let MyWorks = (props) => {
    const [myWorks, addWork] = useState([])
    let works = myWorks.length !== 0 ?  myWorks.map((item) => {
        return <MyWork id={item.id} img={item.img} key={item.id} title={item.title} description={item.description} tags={item.tags}/>
    }) : <MyWork nothing={true}/>

    return (
        <div className={s.worksWrapper}>
            <h1 className={s.title}>Мои работы</h1>
            <div>
                {works}
            </div>
        </div>
    )
}

export default MyWorks