import React from 'react';
import { useLoaderData } from 'react-router-dom';
import image from '../../quiz.png';
import Topic from '../Topic/Topic'

const Home = () => {
    const dataTopics = useLoaderData();
    const {data} = dataTopics;
    console.log(data);
    return (
        <div className='home-content'>
            
            <div className='header-container w-9/12 sm:w-5/6 mx-auto mt-10 mb-32 border-2 rounded-lg p-4 sm:flex justify-around ' >
                <div className='' >
                    <img src={image} alt="" className='w-full' />
                </div>
                <div className='sm:w-9/12'>
                    <h1 className='sm:text-2xl font-bold'>Computer Programming Quizzes & Trivia</h1>
                    <p className='text-left mt-5 sm:ml-8 sm:text-lg'>Check out our online computer programming quizzes to enhance your knowledge, learn new things or prepare for an upcoming test. Made up of well-researched and interesting quiz questions, each and every quiz here can test your awareness and grasp of the subject.Computer programmers are given the sole duty of coming up with programs that ensure a computer can carry out specific tasks smoothly and accurately.</p>
                </div>
            </div>

        <div className='topic-container sm:grid grid-cols-3 mx-auto w-9/12 gap-10 '>
            {
                data.map(topic => <Topic key={topic.id} topic={topic}></Topic> )
            }
        </div>

        </div>
    );
};

export default Home;