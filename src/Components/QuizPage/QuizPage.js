import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizPage = () => {
    const quizDetails = useLoaderData();
    const {data} = quizDetails;
    const {questions} = data;
    console.log(quizDetails);
    console.log(data);
    console.log(questions);
    return (
        <div className='mt-20'>
            <h1 className='text-3xl font-bold '>Quiz Of {data.name}</h1>
            {
                questions.map((question,idx) =>
                <div key={idx} className='border-2 m-8 w-9/12 mx-auto p-8'>
                    <p className='mb-4 text-2xl font-bold text-sky-900'><span className=''>Quiz {idx+1}: </span> {question.question}</p>
                    {
                        question.options.map((option,idx)=>
                            <div key={idx} className='text-left mt-2 text-yellow-800 font-bold text-lg'>
                                <input type="radio" name="" id={idx} />
                                <label className='ml-4' for={idx}>{option}</label>
                            </div>
                        )
                    }
                
                </div>

                    )
            }
        </div>
    );
};

export default QuizPage;