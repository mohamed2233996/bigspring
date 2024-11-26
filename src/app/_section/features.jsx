import React from 'react';
import featuresBoxs from '@/data/featuresData';

const Features = () => {
    return (
         <section data-aos="fade-up">
            <div className="container m-auto">
                <div className="flex flex-col xl:flex-row gap-6">
                    <div className="xl:w-1/3 w-full mb-0 xl:mb-4">
                        <div className="flex flex-col ">
                            <h2 className='text-4xl mb-4 font-bold'>The ultimate platform for creating, sharing, and executing.</h2>
                            <p className='text-gray-500 dark:text-gray-300 mb-4'>We are helping thousands of organizations run their business strategies and achieve their ambitious results! We make big plans happen.</p>
                            <button className='py-2 px-4 text-lg rounded-3xl text-primary hover:text-white hover:bg-primary transition-all w-max  border border-primary'>Try for Free</button>
                        </div>
                    </div>
                    <div className="xl:w-2/3 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {
                                featuresBoxs?.map((box, key) => {
                                    return (
                                        <div key={key} className='flex items-start flex-row px-4 py-5 gap-4 bg-white dark:bg-boxColor rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all'>
                                            <span className='text-primary'>
                                                {box.icon}
                                            </span>
                                            <div>
                                                <h3 className='text-xl font-bold mb-2'>{box.title}</h3>
                                                <p className='text-gray-500 dark:text-gray-300 mb-4'>{box.description}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
