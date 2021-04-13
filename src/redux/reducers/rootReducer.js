import { combineReducers } from "redux";
import { authentication } from "./authReducer";
import { registration } from "./registerReducer";
import { alert } from "./alertReducer";
import { getAllUsers } from "./getUsersReducer"

export const rootReducer = combineReducers({
  authentication,
  registration,
  alert,
  getAllUsers
});
