import { combineReducers } from "redux";
import { lastLocatereducer } from "./lastlocatereducer";
import { reducer } from "./reducer";
import { idreducer } from "./idreducer";

const rootReducer = combineReducers({
    idreducer,
    lastLocatereducer,
    reducer
})

export default rootReducer