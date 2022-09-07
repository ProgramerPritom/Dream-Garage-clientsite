import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Sharer/Loading';
import useToken from '../../hooks/useToken';
import { useState } from 'react';

const SignUp = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
      const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [pUser,setPUser] = useState('');
    const [token] = useToken(user || gUser || pUser);
    

    if (token) {
        navigate('/login');
    }

    let signInError;
    if (error || gError) {
        signInError = <p className='text-red-500 py-4 text-center'> {error?.message || gError?.message}</p>
        
    }

    if (loading || gLoading) {
        return <Loading></Loading>
    }



    const handleGoogleAuth = () =>{
        signInWithGoogle();
    }

    const onSubmit = async data =>{

        createUserWithEmailAndPassword(data.email, data.password);
        setPUser({
            UserName : data.name,
            email : data.email,
            password : data.password
        })



    }

    return (
        <div>
            <div className="login-banner flex justify-center">
            <div className='flex text-center items-baseline pt-48'>
            <h5 className="text-3xl text-white font-semibold mr-4">Dream Motors</h5>
            <div className="login-icon text-white mr-4 text-xl">
            <FaArrowRight></FaArrowRight>
            </div>
            <h6 className="text-2xl text-white font-semibold mr-4">SIGNUP</h6>
            </div>
            </div>


            <div className="signup-form-area">
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row">
                <div>
                <h2 className='text-center text-3xl font-bold text-yellow-400 my-2'>Complete Registation Process</h2>
                <img src="https://img.freepik.com/premium-vector/online-registration-sign-up-concept-flat-vector-illustration-young-male-cartoon-character-sitting-huge-smartphone-login-account-social-media-app-user-interface-secure-login_241107-1247.jpg?w=2000" class="max-w-lg rounded-lg" />
                </div>




                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border shadow-sm">
                    <div class="card-body">

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control">
                        <label class="label">
                            <span class="label-text">Full Name</span>
                        </label>
                        <input type="text" placeholder="Your Name" class="input input-bordered" 
                        {...register("name",  {
                        
                            required : {
                                value : true,
                                message : 'Enter Full Name first'
                            }
                            
                          })}
                        />
                        <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        
                        
                    </label>
                        </div>

                        <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Your Email" class="input input-bordered"
                        {...register("email",  {
                            pattern: {
                              value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                              message: 'Provide a Valid Email' 
    
    
                            },
                            required : {
                                value : true,
                                message : 'Email Must be given'
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
                        <input type="password" placeholder="Type Password" class="input input-bordered"
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
                        <input className='btn w-full max-w-xs text-white' type="submit" value='Sign-up' />
                        </div>
                        </form>
                        <p className='text-center text-sm'>Already have account ?  <Link className='text-primary font-bold' to='/login'>Please Login</Link></p>
                
                        <div className="divider">OR</div>
                        <button onClick={handleGoogleAuth}
                        className="btn btn-outline">Continue with Google</button>

                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;