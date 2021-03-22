import { combineReducers } from "redux";
import { authentication } from "./authReducer";

export const rootReducer = combineReducers({
  authentication,
});
