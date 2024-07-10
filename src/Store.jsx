
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {thunk} from 'redux-thunk';

import productReducer from './components/Redux/Reducer/ProductReducer.jsx';
import cartReducer from './components/Redux/Reducer/cartReducer.jsx';

const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };
