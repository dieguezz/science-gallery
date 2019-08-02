import { combineReducers } from "redux";
import { listReducer } from "../../List/store";
import { itemReducer } from "../../ItemPage/store";

export const appReducer = combineReducers({ listReducer, itemReducer });
