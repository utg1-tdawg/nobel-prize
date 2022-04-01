import { combineReducers } from "redux";
import nobelPrizesReducer from "./nobelPrizesReducer";

export default combineReducers({
  nobelPrizes: nobelPrizesReducer,
});
