export const addItemToCart = (cartItems, itemToAdd) => {
    const existingItem = cartItems.find(item => item.id === itemToAdd.id);

    if (existingItem) {
        return cartItems.map(ci =>
            ci.id === existingItem.id ?
                { ...ci, quantity: ci.quantity + 1 } : ci
        )

    }

    return [...cartItems, { ...itemToAdd, quantity: 1 }];
}

export const removeItemFromCart = (cartItems, itemToRemove) => {
    return cartItems.filter(item => item.id !== itemToRemove.id);
}

export const decreaseItemQuantity = (cartItems, itemToDecrease) => {
    const targetItem = cartItems.find(item => item.id === itemToDecrease.id);

    if (targetItem.quantity <= 1) {
        return removeItemFromCart(cartItems, itemToDecrease);
    } else {
        return cartItems.map(ci =>
            ci.id === targetItem.id ?
                { ...ci, quantity: ci.quantity - 1 } : ci
        )

    }
}
