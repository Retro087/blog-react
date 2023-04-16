import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import Profile from "./Profile";
import { updateAuthData } from "../redux/auth-reducer";

let mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        name: state.auth.name,
        password: state.auth.password,
    }
}

let ProfileContainer = compose(connect(mapStateToProps, {updateAuthData}), withAuthRedirect)(Profile)

export default ProfileContainer