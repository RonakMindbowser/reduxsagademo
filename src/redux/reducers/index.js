import { combineReducers } from "redux";
import employeReducer from "./employeReducer";

const allReducers = combineReducers({
    employeReducer
})

export default allReducers;