import React from 'react';
import Blogs from '../Blogs/Blogs';
import AboutCompany from './AboutCompany/AboutCompany';
import Banner from './Banner/Banner';
import BestSeller from './Best Seller/BestSeller';
import Brand from './Brand/Brand';
import Contact from './Contact/Contact';
import Counter from './Counter/Counter';
import QuestionPart from './QuestionPart/QuestionPart';
import Review from './Review/Review';
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
            <Review></Review>
            <Brand></Brand>
            <Blogs></Blogs>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;