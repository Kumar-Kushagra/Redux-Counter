// THIS IS THE REDUCER 

import { INC_COUNTER } from '../actions/Counter';
import { DEC_COUNTER } from '../actions/Counter';

const initialState = {
    value: 0,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case INC_COUNTER:
            return {
                ...state,
                value: state.value + 1,
            }
        case DEC_COUNTER:
            return {
                ...state,
                value: state.value - 1,
            }
    }
    return state;
}