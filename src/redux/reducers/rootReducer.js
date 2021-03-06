import { combineReducers } from "redux";
import { authentication } from "./authReducer";
import { registration } from "./registerReducer";
import { alert } from "./alertReducer";

export const rootReducer = combineReducers({
  authentication,
  registration,
  alert,
});
