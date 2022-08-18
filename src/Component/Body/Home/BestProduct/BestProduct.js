import React from 'react';

const BestProduct = ({product}) => {
    const {productName,image,description,price} = product;
    const seeDescription = description.slice(0,120);
    const seeMore = seeDescription + '......see more';
    return (
        <div>
            <div class="card w-full border">
            <figure><img className='w-40' src={image} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title text-3xl">{productName}</h2>
                <p>Price: $<span>{price}</span></p>
                <p>{description === 150 ? seeDescription : seeMore}</p>
                <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default BestProduct;