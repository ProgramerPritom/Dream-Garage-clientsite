import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './Loading';
import './Navbar.css';

const Navbar = () => {
    
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return <Loading></Loading>
    }
    
    const logout = () =>{
        signOut(auth);
    }

    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/products'>Products</Link></li>
                <li><Link to='/services'>Services</Link></li>
                <li><Link to='/about'>About Us</Link></li>
                <li><Link to='/blogs'>Blogs</Link></li>
                <li><Link to='/myprofile'>My Profile</Link></li>
                </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/products'>Products</Link></li>
                <li><Link to='/services'>Services</Link></li>
                <li><Link to='/about'>About Us</Link></li>
                <li><Link to='/blogs'>Blogs</Link></li>
                <li><Link to='/myprofile'>My Profile</Link></li>
                </ul>
            </div>
            <div class="navbar-end">
            
            {/* <div class="login-btn grid h-8 card bg-base-300 rounded-box place-items-center"><Link to='/login'>Login</Link></div> 
            <div class="divider sm:divider-horizontal">|</div> 
            <div class="login-btn grid h-8 card bg-base-300 rounded-box place-items-center"><Link to='/signup'>Sign Up</Link></div> */}
            <ul class="menu menu-horizontal p-0">
            <li> {
                    user ? <Link to='/dashboard'>Dashboard</Link> :<Link to='/login'>Login</Link> 
                 }
                 </li>
                 <li><div class="divider sm:divider-horizontal">|</div></li>
                 <li>
                 {
                    user ? <button onClick={logout} class="">Log Out</button>:<Link to='/signup'>Sign Up</Link>
                 }
                 </li> 
            </ul>
            
            </div>
            </div>
    );
};

export default Navbar;