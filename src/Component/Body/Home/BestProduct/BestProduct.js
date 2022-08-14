import React from 'react';

const BestProduct = ({product}) => {
    const {productName,image,description,price} = product
    return (
        <div>
            <div class="card w-full bg-base-100 shadow-xl">
            <figure><img className='w-40' src={image} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{productName}</h2>
                <p>Price: $<span>{price}</span></p>
                <p>{description}</p>
                <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default BestProduct;