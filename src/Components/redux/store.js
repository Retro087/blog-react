import { createStore, combineReducers } from "redux";
import HomePageReducer from "./homePage-reducer"

let reducers = combineReducers({
    homePage: HomePageReducer,
    
})  

let store = createStore(reducers)

export default store 