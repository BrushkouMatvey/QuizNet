
import { combineReducers, createStore } from "react";
import authReducer from "./auth-reducer";



let reducers = combineReducers({
    auth: authReducer
});
 

let store = createStore(reducers);
window.store = store;
export default store;