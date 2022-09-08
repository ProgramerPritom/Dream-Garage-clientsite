import React, { useEffect, useState } from 'react';
import BestProduct from '../BestProduct/BestProduct';
import './BestSeller.css';

const BestSeller = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://whispering-meadow-28819.herokuapp.com/products')
        .then(res=>res.json())
        .then(data =>{
            // console.log(data);
            setProducts(data);
        })
    },[])
    return (
        <div>
            <div className="best-sells-text my-4">
                <h2 className="text-center text-orange-500 font-semibold text-4xl">Best Sells Products</h2>
                <p className="text-xl text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, possimus?
                </p>
            </div>
            <div className="best-sells-products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-3">
            {
                products.slice(0,6).map(product => <BestProduct key={product._id} product={product} ></BestProduct>)
            }
            </div>
        </div>
    );
};

export default BestSeller;