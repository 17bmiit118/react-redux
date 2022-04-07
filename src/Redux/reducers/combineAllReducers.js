import { combineReducers } from "redux";
import amountReducer from "./amountReducer";
import secondReducer from "./secondReducer";

const reducers = combineReducers({
    amountState:amountReducer,
    secondState:secondReducer
})  

export default reducers;