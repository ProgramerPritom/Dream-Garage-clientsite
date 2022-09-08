import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='my-12'>
            <div className="contact-text">
                <h2 className="text-4xl text-center my-4 font-semibold text-orange-500">Contact Us</h2>
            </div>
            <div className="contact-body">
            <div class="card lg:card-side card-compact w-full bg-base-100 ">
            <figure id='contact-img' className='w-2/4'><img className='contact-img' src="https://aim.gov.in/images/contact-banner.jpg" alt="Album"/></figure>
                <div id='contact-body' class="card-body w-1/2">
                    <form action="">
                        <label htmlFor="">Full Name</label>
                        <input className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500' type="text" name="name" id="" />
                        <label htmlFor="">Email</label>
                        <input className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500' type="text" name="name" id="" />
                        <label htmlFor="">Message</label>
                        <textarea className='h-44 mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500' name="name" id="" ></textarea>
                        {/* <input className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500' type="text" name="name" id="" /> */}
                    </form>
                    <div class="card-actions">
                    <button id='basicBtn' class="btn btn-primary w-full">Submit</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;