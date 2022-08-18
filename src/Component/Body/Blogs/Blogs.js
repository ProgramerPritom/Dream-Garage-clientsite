import React from 'react';

const Blogs = () => {
    return (
        <div className='my-8'>
            <h2 className="text-4xl text-center my-4 text-purple-600 font-bold">Our Latest Blog</h2>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4'>
            <div className="blog-card">
            <div class="card bg-base-100 border">
            
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" class="rounded-xl" />
            
            <div class="card-body p-2">
                <h2 class="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
            </div>
            <div className="blog-card">
            <div class="card bg-base-100 border">
            
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" class="rounded-xl" />
            
            <div class="card-body p-2">
                <h2 class="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
            </div>
            <div className="blog-card">
            <div class="card bg-base-100 border">
            
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" class="rounded-xl" />
            
            <div class="card-body p-2">
                <h2 class="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Blogs;