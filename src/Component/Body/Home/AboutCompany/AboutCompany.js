import React from 'react';
import { FaFacebookF, FaLinkedin, FaYoutube } from "react-icons/fa";
import './AboutCompany.css';

const AboutCompany = () => {
    return (
        <div>
            <div className="about-tx my-8">
                <h2 className="text-center text-4xl text-orange-500 font-semibold">About Company</h2>
                <p className='text-center text-2xl font-semibold'>Find Our Company Grow</p>
            </div>

            <div className='company-details'>
                <div class="hero min-h-screen">
                <div  class="hero-content flex-col lg:flex-row-reverse">
                    <img id='company-tag' src="https://grist.org/wp-content/uploads/2021/09/GettyImages-1233389366-e1631218115937.jpg" class="max-w-lg rounded-lg shadow-2xl" />
                    <div>
                    <h1 class="text-4xl font-bold">Dream Motors Garage</h1>
                    <p class="py-6">Dream Garage is a Car Parts manufacturer company. We take order and build car parts. This is our main manufacturer factory. we have 800+ employee who well expert on this field. Every Day more then 1000+ product deliver form our factory.</p>
                    <div className="social-company flex flex-row my-3">
                        <div className='p-2 text-xl'><FaFacebookF></FaFacebookF></div>
                        <div className='p-2 text-xl'><FaLinkedin></FaLinkedin></div>
                        <div className='p-2 text-xl'><FaYoutube></FaYoutube></div>
                        
                        
                    </div>
                    <button id='basicBtn' class="btn btn-primary">Contact Us</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default AboutCompany;