import React from 'react';
import Banner from './Banner/Banner';
import BestSeller from './Best Seller/BestSeller';
import BestProduct from './BestProduct/BestProduct';
import SubCatagory from './SubCatagory/SubCatagory';
import Support from './Support/Support';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SubCatagory></SubCatagory>
            <Support></Support>
            <BestSeller></BestSeller>
            
        </div>
    );
};

export default Home;