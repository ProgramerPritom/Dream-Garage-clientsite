import React from 'react';
import './Support.css';
import { BiSupport } from "react-icons/bi";
import { FaAward } from "react-icons/fa";
import { GiCommercialAirplane } from "react-icons/gi";

const Support = () => {
    return (
        <div class="start-delivery stats w-full stats-vertical lg:stats-horizontal my-8">
  
        <div class="stat px-3">
            <div class="stat-title">24/7 Days</div>
            <div class="text-3xl font-bold">Online Support</div>
            <div class="text-4xl font-bold text-slate-500 my-2 flex items-center"><BiSupport></BiSupport></div>
        </div>
        
        <div class="stat px-3">
            <div class="stat-title">Get Return Product</div>
            <div class="text-3xl font-bold">Free Delivery</div>
            <div class="text-4xl font-bold text-slate-500 my-2 flex items-center"><GiCommercialAirplane></GiCommercialAirplane></div>
        </div>
        
        <div class="stat px-3">
            <div class="stat-title">Get New</div>
            <div class="text-3xl font-bold">Quality Products</div>
            <div class="text-4xl font-bold text-slate-500 my-2 flex items-center"><FaAward></FaAward></div>
            
        </div>
        
        </div>
    );
};

export default Support;