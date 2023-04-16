import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import TextPage from "./TextPage";
import { useLocation, useNavigate, useParams } from "react-router";

let mapStateToProps = (state) => {
    return {
        posts: state.homePage.posts
    }
}

function withRouter(Component) {

    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}


let TextPageContainer = compose(connect(mapStateToProps), withRouter)(TextPage)

export default TextPageContainer