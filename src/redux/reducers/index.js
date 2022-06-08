import { combineReducers } from "redux";
import { budgetReducer } from "./budgets";

const reducerObject = {
    budgetReducer : budgetReducer
}

const reducer = combineReducers({...reducerObject})


export default reducer 