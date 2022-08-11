import React from 'react';
import './SubCatagory.css';

const SubCatagory = () => {
    return (
        <div className='sub-card grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mx-16'>

        <div class="card-border card w-full image-full">
        <figure><img src="https://lemonbin.com/wp-content/uploads/2020/06/Headlights-june092020.jpg" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        </div>


                <div class="card-border card w-full image-full">
                <figure><img src="https://lemonbin.com/wp-content/uploads/2020/06/Headlights-june092020.jpg" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
                </div>


                <div id='card-img' class="card-border card w-full image-full">
                <figure><img src="https://lemonbin.com/wp-content/uploads/2020/06/Headlights-june092020.jpg" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default SubCatagory;