import React from 'react';
import './Banner.css';

const Banner = () => {
    const style ={
        color: 'red'
    }
    return (
        <div class="banner-area hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
            
            <div>
            <h1 class="text-5xl font-bold text-white">Box Office News!</h1>
            <p class="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button id='basicBtn' class="btn btn-primary">Get Now</button>
            </div>
        </div>
        </div>
    );
};

export default Banner;