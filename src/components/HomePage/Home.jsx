import React from 'react';
import Navbar from '../NavBar/Navbar';
import Banner from '../Banner/Banner';
import ProductList from '../Product/ProductList';
import Footer from "../Footer/Footer";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; 
import { store, persistor } from '../../Store'; 

const Home = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navbar />
        <Banner />
        <ProductList />
        <Footer />
      </PersistGate>
    </Provider>
  );
};

export default Home;
