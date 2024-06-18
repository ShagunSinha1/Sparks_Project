import React from 'react';
import { Link } from 'react-router-dom';
import back_image from '../images/background.png'

const HomePage = () => {
    return (
        <div className='h-screen bg-gradient-to-br from-indigo-300 to-indigo-10 flex border-4 border-solid border-indigo-400 '>
            <div className='p-5 m-auto flex-col text-center justify-center'>
                <h1 className='text-4xl font-bold '>Experience Banking Like Never Before</h1>
                <p className='text-xl italic'>Secure. Fast. Effortless. Your financial freedom starts here.</p>
                <button className='bg-indigo-500 text-2xl mt-10 m-auto p-3 rounded-md hover:bg-indigo-600 hover:scale-105'><Link to="/customers" className='text-white'>View All Customers</Link></button>
                
            </div>
            <div className='m-auto'>
                <img src={back_image} alt="" />
            </div>
        </div>
    );
};

export default HomePage;
