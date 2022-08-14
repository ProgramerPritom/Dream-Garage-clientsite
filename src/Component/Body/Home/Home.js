import React from 'react';
import AboutCompany from './AboutCompany/AboutCompany';
import Banner from './Banner/Banner';
import BestSeller from './Best Seller/BestSeller';
import Counter from './Counter/Counter';
import QuestionPart from './QuestionPart/QuestionPart';
import SubCatagory from './SubCatagory/SubCatagory';
import Support from './Support/Support';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SubCatagory></SubCatagory>
            <Support></Support>
            <BestSeller></BestSeller>
            <AboutCompany></AboutCompany>
            <Counter></Counter>
            <QuestionPart></QuestionPart>
        </div>
    );
};

export default Home;