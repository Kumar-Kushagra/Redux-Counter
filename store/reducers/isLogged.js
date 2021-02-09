
import { LOG_IN } from '../actions/isLogged';

const initialState = {
    key: "Shivam",
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                key: state.key === 'Shivam' ? "Kush" : "Shivam"
            }
        default:
            return state
    }
}