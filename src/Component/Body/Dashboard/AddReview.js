import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Sharer/Loading';

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit,reset } = useForm();
    const [user, loading, error] = useAuthState(auth);
    const [ratting,setRatting] = useState(0);
    
    if (loading) {
        return <Loading></Loading>
    }

    const onSubmit = data => {
        const review = {
            email : user.email,
            ratting : ratting,
            reviewDescription : data.reviewDescription

        }
        fetch('https://whispering-meadow-28819.herokuapp.com/reviews',{
            method: 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            toast('Thank for giving your valuable Reviews');
            reset();
        })
        
        
    }
    return (
        <div>
            <div class="card w-full bg-base-100 shadow-xl">
            <h3 className="text-center text-3xl font-semibold text-yellow-700">
                Place a review about Products
            </h3>
            
            <div class="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control">
            <div class="rating">
            <input type="radio" name="rating-2" value='1' class="mask mask-star-2 bg-orange-700" onClick={() =>setRatting(1)}/>
            <input type="radio" name="rating-2" value='2' class="mask mask-star-2 bg-orange-700" onClick={() =>setRatting(2)}/>
            <input type="radio" name="rating-2" value='3' class="mask mask-star-2 bg-orange-700" onClick={() =>setRatting(3)}/>
            <input type="radio" name="rating-2" value='4' class="mask mask-star-2 bg-orange-700" onClick={() =>setRatting(4)}/>
            <input type="radio" name="rating-2" value='5' class="mask mask-star-2 bg-orange-700" onClick={() =>setRatting(5)}/>
            
            </div>
            </div>
            

            <div class="form-control">
            <label class="label">
                <span class="label-text">Description</span>
            </label>
            <textarea class="textarea textarea-bordered" placeholder="Add Review Description" {...register("reviewDescription", { required: true })}></textarea>
            </div>

            <div class="form-control mt-6">
                <input className='btn w-full max-w-xs text-white' type="submit" value='Submit' />
                </div>
            
            </form>


            

            








                
            </div>
            </div>
        </div>
    );
};

export default AddReview;