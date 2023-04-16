const AUTH = 'AUTH'
const UPDATE_AUTH_DATA = "UPDATE_AUTH_DATA"

let initialState = {
    isAuth: false,
    email: null,
    password: null,
    name: null
}

let AuthReducer = (state = initialState, action) => {
    switch(action.type){
        case AUTH:
            return{
                ...state,
                email: action.email,
                password: action.password,
                isAuth: true
            }
        case UPDATE_AUTH_DATA:
            return {
                ...state,
                email: action.email,
                password: action.password,
                name: action.name
            }
        default:
            return state
    }
}

export let auth = (email, password) => ({type: AUTH, email, password})
export let updateAuthData = (email, password, name) => ({type: UPDATE_AUTH_DATA, email, password, name})
export default AuthReducer