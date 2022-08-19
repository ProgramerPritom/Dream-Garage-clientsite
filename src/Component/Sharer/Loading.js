import React from 'react';
import { ScaleLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='text-center my-5'>
           <ScaleLoader
            color="#fd9316"
            height={60}
            margin={4}
            speedMultiplier={1}
            width={5}
            />
        </div>
    );
};

export default Loading;