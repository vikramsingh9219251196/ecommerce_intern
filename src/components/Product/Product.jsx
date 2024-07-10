import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/Action/cartActions';
import './Product.css';

const Product = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <div className="product">
            <img src={product.image} alt={product.title} />
            <div className="product-details">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;
