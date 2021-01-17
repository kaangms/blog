import { combineReducers } from "redux";
import getPostCategoriesReducer from "./postCategoryReducers/getPostCategoriesReducer";

const rootReducer = combineReducers({
    getPostCategoriesReducer,

});

export default rootReducer;