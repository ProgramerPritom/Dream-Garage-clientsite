import React from 'react';
import Ratting from './Ratting';

const ReviewItem = ({review}) => {
    const {ratting} = review;
    const rate = [2];
    // console.log(rate);
    return (
        <div class="card w-96 my-4">
                    
                    <div class="card-body text-center">
                        <div className="image-area my-3">
                        <div class="avatar">
                            <div class="w-24 rounded-full">
                                <img src="https://placeimg.com/192/192/people" />
                            </div>
                            </div>
                        </div>
                        <div className='Ratting area'>
                            {
                                [...Array(ratting)].map(star => {return <Ratting></Ratting>})
                            }
                        </div>
                        <div className="reviewDescription">
                            <p className='text-xl text-yellow-900'>"{review.reviewDescription}"</p>
                        </div>
                        <div className="sender">
                            <p><small><i>{review.email}</i></small></p>
                        </div>
                    </div>
                    </div>
    );
};

export default ReviewItem;