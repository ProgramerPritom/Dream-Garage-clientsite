import React from 'react';
import { ScaleLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='text-center my-5'>
           <ScaleLoader
            color="#fd9316"
            height={30}
            margin={3}
            speedMultiplier={1}
            width={4}
            />
        </div>
    );
};

export default Loading;