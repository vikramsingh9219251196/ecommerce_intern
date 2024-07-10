import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCartItem } from '../Redux/Action/cartActions';
import './Cart.css'; 

const ShoppingCart = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleChange = (id, quantity) => {
        if (quantity > 0) {
            dispatch(updateCartItem(id, quantity));
        }
    };

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="shopping-cart"> 
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p className="empty-cart">Your cart is empty</p>
            ) : (
                cartItems.map(item => (
                    <div key={item.id} className="cart-item"> 
                        <img src={item.image} alt={item.title} />
                        <div className="cart-details"> 
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <p>Price: ${item.price}</p>
                            <input
                                type="number"
                                value={item.quantity}
                                onChange={(e) => handleChange(item.id, parseInt(e.target.value))}
                            />
                            <button onClick={() => handleRemove(item.id)}>Remove</button>
                        </div>
                    </div>
                ))
            )}
            <div className="cart-total">
                <h3>Total: ${total.toFixed(2)}</h3>
            </div>
        </div>
    );
};

export default ShoppingCart;
