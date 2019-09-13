import React from 'react';
import { connect } from 'react-redux';

import './checkout-item.style.scss';
import { removeCartItem, addCartItem, decreseItemCount } from '../../redux/cart/cart.actions'

const CheckoutItem = ({ cartItem, removeItem, increase, decrease }) => {
    const { imageUrl, name, quantity, price } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => decrease(cartItem)} >
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => increase(cartItem)} >
                    &#10095;
        </div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => removeItem(cartItem)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItem: (item) => dispatch(removeCartItem(item)),
    increase: (item) => dispatch(addCartItem(item)),
    decrease: (item) => dispatch(decreseItemCount(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);