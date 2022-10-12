import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css'

const NavigationBar = () => {
    return (
        <nav className='md:flex justify-around bg-yellow-300 p-10'>
            <h2 className='text-3xl font-bold text-cyan-900	'>TwistQuiz</h2>

            <div>
                <ul className='sm:flex text-cyan-800 text-lg'>
                    <Link to='/' className='anchor block'>Home</Link>
                    <Link to='/' className='anchor block'>Topics</Link>
                    <Link to='/statistics' className='anchor block'>Statistics</Link>
                    <Link to='/blog' className='anchor block'>Blog</Link>

                    {/* <li>Home</li>
                        <li>Topics</li>
                        <li>Statistics</li>
                        <li>Blog</li> */}
                </ul>
            </div>


        </nav>
    );
};

export default NavigationBar;