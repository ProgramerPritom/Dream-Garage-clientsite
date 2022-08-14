import React from 'react';
import CountUp ,{ useCountUp }from 'react-countup';

const Counter = () => {
    useCountUp({
        ref: "counter",
        end: 103,
        enableScrollSpy: true,
        scrollSpyDelay: 0,
        duration: 3,
        suffix:'K'
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
  
        <div class="stat px-3">
            <div class="stat-title">Downloads</div>
            <div id="counter" class="stat-value"></div>
            <div class="stat-desc">Jan 1st - Feb 1st</div>
        </div>
        
        <div class="stat px-3">
            <div class="stat-title">New Users</div>
            <div id='counter2' class="stat-value"></div>
            <div class="stat-desc">↗︎ 400 (22%)</div>
        </div>
        
        <div class="stat px-3">
            <div class="stat-title">New Registers</div>
            <div id='counter3' class="stat-value"></div>
            <div class="stat-desc">↘︎ 90 (14%)</div>
        </div>
        
        </div>
        </div>
    );
};

export default Counter;