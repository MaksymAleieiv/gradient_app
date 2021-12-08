import { gradientsList_ActionTypes } from "./gradientsList_ActionTypes";

export const gradientsList_ActionCreators = {
    addGradient : (payload) => ({type : gradientsList_ActionTypes.ADD_GRADIENT, payload}),
    editGradient : (payload) => ({type : gradientsList_ActionTypes.EDIT_GRADIENT, payload}),
    removeGradient : (payload) => ({type : gradientsList_ActionTypes.REMOVE_GRADIENT, payload}),
}