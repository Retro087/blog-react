import React, { useState } from "react";
import Story from "./Story/Story";
import s from "./HomePage.module.css"
import StoryModal from "../Modals/StoryModal/StoryModal";
import Posts from "./Posts/Posts";

let HomePage = (props) => {
    let stories = props.stories.map((el) => {
        return <Story key={el.id} id={el.id} date={el.date} video={el.video} preview={el.preview} title={el.title} />
    })  

    return (
        <>
            <div className={s.homePage}>
                <div className={s.stories}>
                    {stories}
                </div>
                <div>
                    <Posts addPost={props.addPost} posts={props.posts}/>
                </div>
            </div>
        </>

    )
}

export default HomePage