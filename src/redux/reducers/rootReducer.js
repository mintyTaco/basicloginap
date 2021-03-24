import { combineReducers } from "redux";
import { authentication } from "./authReducer";
import { alert } from "./alertReducer";
import { registration } from "./registerReducer";

export const rootReducer = combineReducers({
  authentication,
  registration,
  alert,
});
