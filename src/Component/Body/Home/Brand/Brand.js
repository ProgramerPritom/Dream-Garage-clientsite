import React from 'react';
import './Brand.css';
import Slider from "react-slick";

const Brand = () => {
    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 8000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        useCSS:true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
              
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div>
            <h4 className="text-4xl text-center text-orange-500 font-semibold my-4">Our Valuable Sponser</h4>
            <div>
        <Slider {...settings}>
          <div className='my-3'>
          <div class="avatar">
            <div class="w-24 rounded-full">
                <img src="https://i.ibb.co/s2wmGbS/download5.png
" />
            </div>
            </div>
          </div>


          <div className='my-3'>
          <div class="avatar">
            <div class="w-24 rounded-full ">
                <img src="https://i.ibb.co/HXKnFZG/download6.png
" />
            </div>
            </div>
          </div>


          <div className='my-3'>
          <div class="avatar">
            <div class="w-24 rounded-full ">
                <img src="https://i.ibb.co/JBjN97L/image5.png
" />
            </div>
            </div>
          </div>


          <div className='my-3'>
          <div class="avatar">
            <div class="w-24 rounded-full ">
                <img src="https://i.ibb.co/CJVF5NW/images1.jpg
" />
            </div>
            </div>
          </div>


          <div className='my-3'>
          <div class="avatar">
            <div class="w-24 rounded-full ">
                <img src="https://i.ibb.co/6g4rRZQ/images2.jpg
" />
            </div>
            </div>
          </div>


          <div className='my-3'>
          <div class="avatar">
            <div class="w-24 rounded-full ">
                <img src="https://i.ibb.co/HCgwTXY/images3.jpg
" />
            </div>
            </div>
          </div>


          <div className='my-3'>
          <div class="avatar">
            <div class="w-24 rounded-full ">
                <img src="https://i.ibb.co/17dthdL/images4.png
" />
            </div>
            </div>
          </div>


        </Slider>
      </div>
        </div>
    );
};

export default Brand;