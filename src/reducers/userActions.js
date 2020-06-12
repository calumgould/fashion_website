import {
    TOGGLE_DARK_MODE
} from '../actions/'

export default (
    state = {
        darkMode: true,
    },
    action
) => {
    switch (action.type) {
        case TOGGLE_DARK_MODE:
            return {
                ...state,
                darkMode: action.darkMode
            };
        default:
            return state;
    }
};