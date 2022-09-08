import React from 'react';

const MyProfile = () => {
    return (
        <div>
            <div className='w-full flex justify-center items-center'>
                <div class="card lg:card-side shadow-xl">
                <figure><img src="https://i.ibb.co/cQKDZwr/DSC-8930.jpg" alt="Album"/></figure>
                <div class="card-body">
                    <h2 class="text-3xl font-semibold">Md Badruzzaman Pritom</h2>
                    <div className='flex justify-between'>
                        <p>Email: </p>
                        <p>badruzzamanpritom@gmail.com</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Contact Number: </p>
                        <p>01767026831</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Education: </p>
                        <p>Diploma in CSE</p>
                    </div>
                    <div>
                        <h3 className="text-center text-xl text-yellow-700 font-semibold my-3">Technology as Web Developer</h3>
                    </div>
                    <div className='flex justify-between'>
                        <p className='underline font-bold'>EXPERTS: </p>
                        <p> HTML5,CSS3,Bootstrap,Tailwind, Javascript,ES6,Rest API,React & React Router,Firebase Authentication</p>
                    </div>
                    <div className='flex justify-between'>
                        <p className='underline font-bold'>COMFORTABLE: </p>
                        <p> Node JS, Express JS, MongoDB, Axios, JSON Web Token, React Query,Figma, Photoshop.</p>
                    </div>
                    <div className='flex justify-between'>
                        <p className='underline font-bold'>Tools: </p>
                        <p> Git, VS Code, Chrome Dev Tools, Netlify,Heroku</p>
                    </div>
                    <div class="card-actions justify-end">
                    <button id='basicBtn' class="btn btn-primary">See more</button>
                    </div>
                </div>
                </div>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4'>


                <div class="card w-full bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/282CQ2n/Screenshot-38.png" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Gym Equipment</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                    <button class="btn btn-primary">Live site</button>
                    </div>
                </div>
                </div>


                <div class="card w-full bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/FXXK4c3/Screenshot-39.png" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Dream Garage</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                    <button class="btn btn-primary">Live site</button>
                    </div>
                </div>
                </div>


                <div class="card w-full bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/55xLRRV/Screenshot-40.png" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Volunteer Network</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                    <button class="btn btn-primary">Live site</button>
                    </div>
                </div>
                </div>
            </div>

        </div>
    );
};

export default MyProfile;