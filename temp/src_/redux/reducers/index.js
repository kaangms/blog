import { combineReducers } from "redux";
import cartReducer from "./cartReducers/cartReducer";
import changeCategoryReducer from "./categoryReducers/changeCategoryReducer";
import getCategoriesReducer from "./categoryReducers/getCategoriesReducer";
import getProductsReducer from "./productReducers/getProductsReducer";
import saveProductReducer from "./productReducers/saveProductReducer";

const rootReducer = combineReducers({
  changeCategoryReducer,
  getCategoriesReducer,
  getProductsReducer,
  cartReducer,
  saveProductReducer
});

export default rootReducer;
