import React from 'react';
import CountUp ,{ useCountUp }from 'react-countup';
import { FaHandshake, FaHandHoldingHeart, FaGift} from "react-icons/fa";

const Counter = () => {
    useCountUp({
        ref: "counter",
        end: 1303,
        enableScrollSpy: true,
        scrollSpyDelay: 0,
        duration: 3,
        
      });
    useCountUp({
        ref: "counter2",
        end: 4200,
        enableScrollSpy: true,
        scrollSpyDelay: 0,
        duration: 3
      });
    useCountUp({
        ref: "counter3",
        end: 1200,
        enableScrollSpy: true,
        scrollSpyDelay: 0,
        duration: 3
      });
    return (
        <div>
            

            <div class="start-delivery stats w-full stats-vertical lg:stats-horizontal my-8">
  
        <div class="stat px-3 flex justify-center items-center flex-col">
            <div class="font-semibold">Clients</div>

            <div id="counter" class="stat-value"></div>

            <div class="">
                <div className='text-5xl my-2 text-yellow-700'>
                    <FaHandshake></FaHandshake>
                </div>
            </div>
        </div>
        
        <div class="stat px-3 flex justify-center items-center flex-col">
            <div class="font-semibold">New Products</div>
            <div id='counter2' class="stat-value"></div>
            <div class="text-5xl my-2 text-yellow-700"><FaHandHoldingHeart></FaHandHoldingHeart></div>
        </div>
        
        <div class="stat px-3 flex justify-center items-center flex-col">
            <div class="font-semibold">Awards</div>
            <div id='counter3' class="stat-value"></div>
            <div class="text-5xl my-2 text-yellow-700"><FaGift></FaGift></div>
        </div>
        
        </div>
        </div>
    );
};

export default Counter;