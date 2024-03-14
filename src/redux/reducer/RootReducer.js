import { combineReducers } from "redux";
import testReducer from "./TestReducer";
import homeReducer from "./HomeReducer";

export const rootReducer = combineReducers({
  testReducer,
  homeReducer
});
