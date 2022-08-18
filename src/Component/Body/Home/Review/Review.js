import React from 'react';
import './Review.css';
import Slider from "react-slick";


const Review = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        // centerPadding: "120px",
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 7000,
        useCSS:true,
        speed: 500
      };
    return (
        <div>
            <h3 className='text-5xl text-center font-bold text-purple-400 my-4'>This is Review area</h3>
            <div>
                
                <Slider {...settings}>
                    
                <div>
                <div class="card w-96 bg-base-100 shadow-xl my-4">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                    </div>
                </div>


                <div>
                <div class="card w-96 bg-base-100 shadow-xl my-4">
                        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                        </div>
                </div>


                <div>
                <div class="card w-96 bg-base-100 shadow-xl my-4">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                    </div>
                </div>


                <div>
                <div class="card  w-96 bg-base-100 shadow-xl my-4">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                    </div>
                </div>


                <div>
                <div class="card  w-96 bg-base-100 shadow-xl my-4">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                    </div>
                </div>


                <div>
                <div class="card  w-96 bg-base-100 shadow-xl my-4">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                    </div>
                </div>


                </Slider>
            </div>
        </div>
    );
};

export default Review;