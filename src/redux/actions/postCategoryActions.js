import * as actionTypes from "./actionTypes";

export const getPostCategories=()=>dispatch=> {
   
        let url="https://localhost:44335/api/postcategories/getall";
        return fetch(url)
        .then(response=>response.json())
        .then(response=>dispatch(getPostCategoriesSuccess(response)))      
     
}

export function getPostCategoriesSuccess(categories) {
    return {type:actionTypes.GET_POSTCATEGORIES_SUCCESS,payload:categories}    
}