import React from 'react';

const Blogs = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            
            <div className="blog-card">
            <div class="card bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
            </div>
            <div className="blog-card">
            <div class="card bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
            </div>
            <div className="blog-card">
            <div class="card bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Blogs;