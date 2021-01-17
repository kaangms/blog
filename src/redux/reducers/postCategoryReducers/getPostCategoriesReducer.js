import initialState from "../initialState";
import *  as actionTypes from "../../actions/actionTypes";

export default function getPostCategoriesReducer(
    state=initialState.categories,
    action
) {
    switch (action.type) {
        case  actionTypes.GET_POSTCATEGORIES_SUCCESS:
            return   action.payload
        default:
            return state;
    }
    
}