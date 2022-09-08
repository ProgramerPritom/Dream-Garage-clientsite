import React from 'react';
import './Banner.css';

const Banner = () => {
    const style ={
        color: 'red'
    }
    return (
        <div class="banner-area hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
            
            <div className='text-left'>
            <h1 class="text-white text-2xl">GET NEW TECHNOLOGY </h1>
            <p class="py-6 text-5xl font-bold text-white text-white">WHEEL & TIRES COLLECTION</p>
            <button id='basicBtn' class="btn btn-primary">Shop Now</button>
            </div>
        </div>
        </div>
    );
};

export default Banner;