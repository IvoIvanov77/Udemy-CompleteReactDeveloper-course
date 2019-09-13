import { shopTypes } from './shop.types'

const INITIAL_STATE = {
    items: {}
};


const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case shopTypes.LOAD_SHOP_DATA:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state
    }
}

export default shopReducer;