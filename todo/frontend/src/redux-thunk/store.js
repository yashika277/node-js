import { thunk } from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { compose } from "redux";
import rootReucer from "./reducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(rootReucer, composeEnhancers(applyMiddleware(thunk)))