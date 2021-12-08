import { gradientsList_ActionTypes } from "./gradientsList_ActionTypes"

const initialState = {
    gradients: [
        {
            id: 1,
            firstColor: '#a85caa',
            secondColor: '#8cb8e9'
        },
        {
            id: 2,
            firstColor: '#d68d3a',
            secondColor: '#bb44a2'
        },
    ]
}

export const gradientsList_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case gradientsList_ActionTypes.ADD_GRADIENT : return {
            ...state,
            gradients : [...state.gradients, action.payload]
        }
        case gradientsList_ActionTypes.EDIT_GRADIENT : 
            let newGradients = [...state.gradients];
            let indexBeingEdited = newGradients.findIndex((el) => (el.id === action.payload.id));
            newGradients[indexBeingEdited] = action.payload;
        return {
            ...state,
            gradients : newGradients
        }
        case gradientsList_ActionTypes.REMOVE_GRADIENT : return {
            ...state,
            gradients : state.gradients.filter(gradient => gradient.id !== action.payload.id)
        }
        default : return {...state, state}
    }
}