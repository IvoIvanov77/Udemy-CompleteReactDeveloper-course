import { DirectoryActionTypes } from './directory.types';

const INITIAL_STATE = {
    categories: []
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DirectoryActionTypes.LOAD_CATEGORIES :
            return {...state, categories: action.payload}
        default:
            return state;
    }
}

export default directoryReducer;