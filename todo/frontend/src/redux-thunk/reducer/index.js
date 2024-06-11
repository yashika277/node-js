import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
// import { todoReducer } from "./todoReducers";

const rootReucer = combineReducers({
    todo: todoReducer
})

export default rootReucer
