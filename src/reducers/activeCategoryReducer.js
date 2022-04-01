import { defaultListboxReducer } from "@mui/material/node_modules/@mui/base";

export default (activeCategory = "physics", action) => {
  switch (action.type) {
    case "CHANGE_ACTIVE_CATEGORY":
      return action.payload;
    default:
      return activeCategory;
  }
};
