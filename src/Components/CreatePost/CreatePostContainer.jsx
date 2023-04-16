import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import CreatePost from "./CreatePost";
import { addPost } from "../redux/homePage-reducer";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

let CreatePostContainer = compose(connect(mapStateToProps, {addPost}))(CreatePost)

export default CreatePostContainer