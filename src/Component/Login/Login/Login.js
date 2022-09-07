import React from 'react';
import './Login.css';
import { FaArrowRight } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { Link,useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import useToken from '../../hooks/useToken';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
      const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [token] = useToken(user || gUser);

    if (token) {
        navigate('/home');
        
    }

    let signInError;
    if (error || gError) {
        signInError = <p className='text-red-500 py-4 text-center'> {error?.message || gError?.message}</p>
        
    }


    const handleGoogleAuth = () =>{
        signInWithGoogle();
    }
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
        
        
    }

    return (
        <div>
            <div className="login-banner">
            <div class="hero-content flex-col lg:flex-row-reverse">
            
            <div className='flex text-center items-baseline pt-44'>
            <h5 className="text-3xl text-white font-semibold mr-4">Dream Motors</h5>
            <div className="login-icon text-white mr-4 text-xl">
            <FaArrowRight></FaArrowRight>
            </div>
            <h6 className="text-2xl text-white font-semibold ">LOGIN</h6>
            </div>
            
        </div>
            </div>


            <div className="login-area">
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div>
                    <h2 className='text-center text-3xl font-bold text-purple-700 my-2'>Welcome Back</h2>
                    <img src="https://i.ibb.co/DkSN3qw/online-registration-illustration-concept-free-vector.jpg" class="max-w-lg rounded-lg" />
                    </div>
                
                    
                    <div class="card flex-shrink-0 w-full max-w-sm  bg-base-100 border shadow-sm">
                    <div class="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Your Email" className="input input-bordered"
                        {...register("email", {
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: "Provide a valid Email"
                            },
                            required: {
                                value: true,
                                message: "Email Must be given"
                            }
                        })}
                        />
                        <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        
                    </label>
                        </div>


                        <div class="form-control">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" class="input input-bordered" 
                        {...register("password",  {
                            minLength: {
                              value: 6,
                              message: 'Password should be 6 Letter or More' 
    
    
                            },
                            required : {
                                value : true,
                                message : 'Password Must be given'
                            }
                            
                          })}
                         />
                         <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            
                        </label>
                        </div>

                        {signInError}

                        <div class="form-control mt-6">
                        <input className='btn w-full max-w-xs text-white' type="submit" value='Login' />
                        </div>
                        </form>
                        <p className='text-center text-sm'>New on Dream Motors ?  <Link className='text-primary font-bold' to='/signup'>Create an account</Link></p>
                
                <div className="divider">OR</div>
                <button id='basicBtn' onClick={handleGoogleAuth}
                className="btn btn-outline">Continue with Google</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Login;