import { ADD_PLATILLO } from '../types';

export default (state, action) => {
    switch(action.type) {

        case ADD_PLATILLO : 
            return {
                ...state,
                platillos: [...state.platillos, action.payload ]
            }

        default :
            return state;
    }
}