import React, { useState } from 'react';
import './Navbar.css';
import logo from "../../assests/logo.png";
import { FiMenu } from 'react-icons/fi';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const cartItems = useSelector(state => state.cart.cartItems);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <FiMenu />
            </div>
            <div className={`links ${isOpen ? 'open' : ''}`}>
                <Link to="/" onClick={toggleMenu}>Home</Link>
                <Link to="/products" onClick={toggleMenu}>Products</Link>
                <Link to="/cart" onClick={toggleMenu}>Cart</Link>
                <div className="dropdown">
                    <button className="dropbtn">Account</button>
                    <div className="dropdown-content">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                </div>
            </div>
            <div className={`search-bar ${isOpen ? 'open' : ''}`}>
                <input type="text" placeholder="Search..." />
                <button type="button">Search</button>
            </div>
            <div className="cart-icon">
                <Link to="/cart">
                    <FaShoppingCart />
                    {cartItemCount >=0 && <span className="cart-count">{cartItemCount}</span>}
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
