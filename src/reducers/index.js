import { combineReducers } from "redux";
import nobelPrizesReducer from "./nobelPrizesReducer";
import activeCategoryReducer from "./activeCategoryReducer";

export default combineReducers({
  nobelPrizes: nobelPrizesReducer,
  activeCategory: activeCategoryReducer,
});
