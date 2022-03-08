import react, { useReducer } from 'react';

import PlatillosContext from './platillosContext';

import platillosRedux from './platillosRedux';

import { ADD_PLATILLO } from '../types';

const PlatillosState = ({ children }) => {

    const initialiceState = {
        platillos: []
    }
    
    const [ state, dispatch ] = useReducer(platillosRedux, initialiceState);

    const addPlatillo = platillo => {
       dispatch({
           type: ADD_PLATILLO,
           payload: platillo
       });
    }

    return <PlatillosContext.Provider
        value={{ 
            platillos: state.platillos,
            addPlatillo, 
        }}
    >
        { children }
    </PlatillosContext.Provider>
}

export default PlatillosState;