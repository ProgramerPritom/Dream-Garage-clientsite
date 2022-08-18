import React from 'react';
import './Brand.css';
import Slider from "react-slick";

const Brand = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 8000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        useCSS:true,
      };
    return (
        <div>
            <h4 className="text-4xl text-center text-green-500 font-bold my-4">Sponsser Company logo area</h4>
            <div>
        <Slider {...settings}>
          <div>
          <div class="avatar">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://placeimg.com/192/192/people" />
            </div>
            </div>
          </div>


          <div>
          <div class="avatar">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://placeimg.com/192/192/people" />
            </div>
            </div>
          </div>


          <div>
          <div class="avatar">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://placeimg.com/192/192/people" />
            </div>
            </div>
          </div>


          <div>
          <div class="avatar">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://placeimg.com/192/192/people" />
            </div>
            </div>
          </div>


          <div>
          <div class="avatar">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://placeimg.com/192/192/people" />
            </div>
            </div>
          </div>


          <div>
          <div class="avatar">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://placeimg.com/192/192/people" />
            </div>
            </div>
          </div>


        </Slider>
      </div>
        </div>
    );
};

export default Brand;