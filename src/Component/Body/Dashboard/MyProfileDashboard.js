import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Sharer/Loading';

const MyProfileDashboard = () => {
    const [user, loading, error] = useAuthState(auth);
    // console.log(user);
    if(loading){
        return <Loading></Loading>
    }
    let errProfile;
    if (error) {
        errProfile = <p className='text-red text-center'>{error.message}</p>
    }
    return (
        <div>
            <h3 className="text-center font-bold text-3xl">My profile</h3>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content text-center">
                
                    <div class="max-w-md">
                        {user.photoURL ?<div class="avatar">
                    <div class="w-24 rounded-full">
                        <img src={user.photoURL} />
                    </div>
                    </div>:<div class="avatar">
                    <div class="w-24 rounded-full">
                        <img src="https://placeimg.com/192/192/people" />
                    </div>
                    </div>}
                    
                    <h1 class="text-3xl font-bold">{user?.displayName}</h1>
                    <p class="py-6">Email : {user?.email}</p>
                    <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
                {errProfile}
                </div>
        </div>
    );
};

export default MyProfileDashboard;