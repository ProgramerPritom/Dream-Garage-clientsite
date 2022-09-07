import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content text-center">
                <div class="max-w-md">
                <img src="https://img.freepik.com/free-vector/404-error-lost-space-concept-illustration_114360-7871.jpg?w=2000" alt="" />
                <div>
                <Link to='/'><button class="btn btn-primary my-2">Goto Home page</button></Link>
                </div>
                </div>
            </div>
            </div>
    );
};

export default NotFoundPage;