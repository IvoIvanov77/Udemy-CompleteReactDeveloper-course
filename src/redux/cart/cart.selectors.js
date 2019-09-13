import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCardHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((quantity, item) =>  quantity + item.quantity, 0)
);

export const selectCartTotalPrice = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((price, item) =>  price + item.quantity * item.price, 0)
);

