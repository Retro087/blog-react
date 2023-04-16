import { compose } from "redux"
import { auth } from "../redux/auth-reducer"
import { connect } from "react-redux"
import Auth from "./Auth"

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }   
}

let mapDispatchToProps = {
    auth
}

let AuthContainer = compose(connect(mapStateToProps, mapDispatchToProps))(Auth)
export default AuthContainer