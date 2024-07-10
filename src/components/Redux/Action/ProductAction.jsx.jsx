// Redux/Action/ProductAction.jsx
import axios from 'axios';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

export const fetchProducts = () => async dispatch => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        dispatch({
            type: FETCH_PRODUCTS,
            payload: response.data,
        });
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};
