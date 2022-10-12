import React from 'react';
import image from '../../quiz.png'

const Home = () => {
    return (
        <div className='md:w-9/12 mx-auto mt-10 border-2 rounded-lg p-4 md:flex justify-around ' >
            <div className='' >
                <img src={image} alt="" className='w-full'/>
            </div>
            <div className='md:w-9/12'>
                <h1 className='md:text-2xl font-bold sm: text-lg'>Computer Programming Quizzes & Trivia</h1>
                <p className='text-left mt-5 md:ml-8 md:text-lg'>Check out our online computer programming quizzes to enhance your knowledge, learn new things or prepare for an upcoming test. Made up of well-researched and interesting quiz questions, each and every quiz here can test your awareness and grasp of the subject.Computer programmers are given the sole duty of coming up with programs that ensure a computer can carry out specific tasks smoothly and accurately.</p>
            </div>
        </div>
    );
};

export default Home;