import React from 'react';
import './Banner.css';
import bannerImage from '../../assests/coffeebanner.jpg';

const Banner = () => {
    return (
        <div className="new-banner">
            <img src={bannerImage} alt="Banner" />
            <div className="new-banner-content">
                <h1>New Promotional Heading</h1>
                <p>Explore our special offers and new arrivals!</p>
                <button>Discover More</button>
            </div>
        </div>
    );
};

export default Banner;
