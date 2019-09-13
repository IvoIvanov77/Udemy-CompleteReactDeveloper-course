import React from 'react';

import './cart-item.style.scss'

const CartItem = ({ cartItem: { name, imageUrl, price, quantity } }) => {
    return (
        <div className='cart-item'>
            <img src={imageUrl} alt='item'></img>

            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{price} x {quantity}</span>
            </div>
        </div>
    )
}

export default CartItem;