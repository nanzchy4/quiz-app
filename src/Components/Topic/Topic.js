import React from 'react';

const Course = ({topic}) => {
    const {logo,name,total} = topic;
    return (
        <div className='border-2 rounded-lg w-72 mt-8 sm:mt-0'>
            <img src={logo} alt="" className=' w-11/12 mx-auto bg-indigo-100 my-2 rounded-lg' />
            
            <div className='flex justify-between items-center mt-4 mb-4'>
            <div className='text-left ml-4'>
            <h3 className='font-bold text-sky-700 text-xl'>{name}</h3>
            <p className='text-sky-700 font-bold '>Total Questions: {total}</p>
            </div>
            <div className='mr-4 bg-sky-700 hover:bg-sky-900 rounded-md text-white p-2 	'>
            <button>Start Practice</button>
            </div>
            </div>
        </div>
    );
};

export default Course;