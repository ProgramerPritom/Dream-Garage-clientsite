import React from 'react';
import './Review.css';
import Slider from "react-slick";
import { useQuery } from 'react-query';
import ReviewItem from './ReviewItem';
import Loading from '../../../Sharer/Loading';


const Review = () => {

    const { isLoading, error, data : reviews } = useQuery('reviews', () =>
     fetch('http://localhost:5000/reviews').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

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
        speed: 500,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
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
            <h3 className='text-3xl text-center font-semibold text-orange-500 my-4'>See What is Our Client say</h3>
            <div>
                
                <Slider {...settings}>
                    
                    {
                        reviews.map(review => <ReviewItem key={review._id} review ={review}></ReviewItem>)
                    }

                


                


                </Slider>
            </div>
        </div>
    );
};

export default Review;