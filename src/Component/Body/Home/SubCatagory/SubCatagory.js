import React from 'react';
import './SubCatagory.css';

const SubCatagory = () => {
    return (
        <div className='sub-card grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mx-16'>

        <div class="card-border card w-full image-full">
        <figure><img src="https://t4.ftcdn.net/jpg/03/08/44/53/360_F_308445331_ZZinysRse5xOZacNTnoQqG24TAy7ftZ5.jpg
" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">Exclusive</h2>
            <p className='text-xl font-bold'>Cars Bannet and shapes</p>
            <div class="card-actions justify-end">
            <button id='basicBtn' class="btn btn-primary">Explore</button>
            </div>
        </div>
        </div>


                <div class="card-border card w-full image-full">
                <figure><img src="https://i.ibb.co/0yS9V1s/Car-Headlights.png
" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="text-xl font-semibold text-right">Form $678</h2>
                    <p className='text-2xl font-bold text-right'>Latest & beauty Headlights</p>
                    <div class="card-actions justify-end">
                    <button id='basicBtn' class="btn btn-primary">Explore</button>
                    </div>
                </div>
                </div>


                <div id='card-img' class="card-border card w-full image-full">
                <figure><img src="https://free4kwallpapers.com/uploads/originals/2020/05/09/car-dashboard-wallpaper.png
" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Most</h2>
                    <p className='text-2xl font-bold'>Attractive Car Dashboard</p>
                    <div class="card-actions justify-end">
                    <button id='basicBtn' class="btn btn-primary">Explore</button>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default SubCatagory;