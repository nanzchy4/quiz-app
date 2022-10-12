import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css'

const NavigationBar = () => {
    return (
            <nav className='md:flex justify-around bg-yellow-300 p-10'>
                <h2 className='text-3xl font-bold text-cyan-900	'>TwistQuiz</h2>

                <div>
                    <ul className='md:flex text-cyan-800 text-lg'>
                        <li>Home</li>
                        <li>Topics</li>
                        <li>Statistics</li>
                        <li>Blog</li>
                    </ul>
                </div>
                
                {/* <Link to='/'>Home</Link>
                    <Link to='/topics'>Topics</Link>
                    <Link to='/statistics'>Statistics</Link>
                    <Link to='/blog'>Blog</Link> */}
            </nav>
    );
};

export default NavigationBar;