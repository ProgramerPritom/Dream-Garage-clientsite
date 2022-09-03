import React from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    

    const onSubmit = data => {
        
        console.log(data)
        
    }
    return (
        <div>
            <div class="card w-full bg-base-100 shadow-xl">
            <h3 className="text-center text-3xl font-bold">
                Place a review about Products
            </h3>
            
            <div class="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control">
            <div class="rating">
            <input type="radio" name="rating-2" value='1' class="mask mask-star-2 bg-orange-700" {...register("ratting1", { required: true })} />
            <input type="radio" name="rating-2" value='2' class="mask mask-star-2 bg-orange-700" {...register("ratting2", { required: true })}/>
            <input type="radio" name="rating-2" value='3' class="mask mask-star-2 bg-orange-700" {...register("ratting3", { required: true })}/>
            <input type="radio" name="rating-2" value='4' class="mask mask-star-2 bg-orange-700" {...register("ratting4", { required: true })}/>
            <input type="radio" name="rating-2" value='5' class="mask mask-star-2 bg-orange-700" {...register("ratting5", { required: true })}/>
            
            </div>
            </div>
            

            <div class="form-control">
            <label class="label">
                <span class="label-text">Description</span>
            </label>
            <textarea class="textarea textarea-bordered" placeholder="Add Review Description"></textarea>
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