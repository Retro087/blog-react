import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Header from "./Header";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

let HeaderContainer = compose(connect(mapStateToProps))(Header)

export default HeaderContainer