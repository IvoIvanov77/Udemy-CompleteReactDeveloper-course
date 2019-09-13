import { shopTypes } from './shop.types';

export const loadShopData = (items) => ({
    type: shopTypes.LOAD_SHOP_DATA,
    payload: items
})