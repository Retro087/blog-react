import { createStore, combineReducers } from "redux";
import HomePageReducer from "./homePage-reducer"
import AuthReducer from "./auth-reducer";

let reducers = combineReducers({
    homePage: HomePageReducer,
    auth: AuthReducer,
})  

let store = createStore(reducers)

export default store 