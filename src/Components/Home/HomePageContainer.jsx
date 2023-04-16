import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import HomePage from "./HomePage";
import { addPost, openModalStory } from "../redux/homePage-reducer"

let mapStateToProps = (state) => {
    return {
        posts: state.homePage.posts,
        stories: state.homePage.stories,
        
    }
}

let mapDispatchToProps = {
    addPost,
}

let HomePageContainer = compose(connect(mapStateToProps, mapDispatchToProps))(HomePage)

export default HomePageContainer