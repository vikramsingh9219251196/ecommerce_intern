

import { combineReducers } from 'redux';
import productReducer from './ProductReducer.jsx';

const rootReducer = combineReducers({
    products: productReducer,

});

export default rootReducer;
