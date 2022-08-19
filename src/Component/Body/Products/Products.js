import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import useProducts from '../../hooks/useProducts';
import Loading from '../../Sharer/Loading';
import Product from './Product/Product';

const Products = () => {
    const [products] = useProducts();
    

    


    return (
        <div>
            <div className="products-banner">
                <div className="login-banner flex justify-center pt-4">
                <div className='flex text-center items-baseline pt-48'>
                <h5 className="text-3xl text-white font-semibold mr-4">Dream Motors</h5>
                <div className="login-icon text-white mr-4 text-xl">
                <FaArrowRight></FaArrowRight>
                </div>
                <h6 className="text-2xl text-white font-semibold mr-4">PRODUCTS</h6>
                </div>
                </div>
            </div>


            <div className="products-section">
                <div className="products-text my-6">
                    <h3 className="text-center font-semibold text-2xl uppercase ">All Products</h3>
                    <p className='text-center mt-2 text-slate-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vero obcaecati magnam sit recusandae ullam est nemo quasi fuga quia?</p>
                </div>


                <div className="products-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 my-4">
                {
                    products.map(product => <Product product={product} key={product._id}></Product>)
                }
                </div>
                
            </div>
        </div>
    );
};

export default Products;