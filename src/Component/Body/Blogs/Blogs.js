import React from 'react';

const Blogs = () => {
    return (
        <div className='my-8'>
            <h2 className="text-4xl text-center my-4 text-orange-500 font-semibold">Our Latest Blog</h2>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4'>
            <div className="blog-card">
            <div class="card bg-base-100 border">
            
                <img src="https://htmldemo.net/lukas/lukas/assets/img/blog/blog-7.jpg" alt="Blogs" class="rounded-xl" />
            
            <div class="card-body p-2">
                <h2 class="card-title">Ready for track day</h2>
                <p>There are simple hand-held tire-pressure gauges which can be temporarily attached to</p>
                <div class="card-actions">
                <button id='basicBtn' class="btn btn-primary">See more</button>
                </div>
            </div>
            </div>
            </div>
            <div className="blog-card">
            <div class="card bg-base-100 border">
            
                <img src="https://htmldemo.net/lukas/lukas/assets/img/blog/blog-1.jpg" alt="Blogs" class="rounded-xl" />
            
            <div class="card-body p-2">
                <h2 class="card-title">GM is About to Surprise with</h2>
                <p>There are simple hand-held tire-pressure gauges which can be temporarily attached to</p>
                <div class="card-actions">
                <button id='basicBtn' class="btn btn-primary">See more</button>
                </div>
            </div>
            </div>
            </div>
            <div className="blog-card">
            <div class="card bg-base-100 border">
            
                <img src="https://htmldemo.net/lukas/lukas/assets/img/blog/blog-9.jpg" alt="Blogs" class="rounded-xl" />
            
            <div class="card-body p-2">
                <h2 class="card-title">When do I Change My Rotors?</h2>
                <p>There are simple hand-held tire-pressure gauges which can be temporarily attached to</p>
                <div class="card-actions">
                <button id='basicBtn' class="btn btn-primary">See more</button>
                </div>
            </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Blogs;