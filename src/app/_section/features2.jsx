import { features2Boxs } from '@/data/featuresData';
import React from 'react';

const Features2 = () => {
    return (
        <section className='section bg-themeLight dark:bg-themeDark py-20 transition-all'>
            <div className="container m-auto">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        features2Boxs?.map((box, key) => {
                            return (
                                <div key={key} className='flex items-center flex-col gap-8 px-4 py-5 bg-white dark:bg-boxColor rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all'>
                                    <span className='bg-primary p-4 text-white rounded-lg'>
                                        {box.icon}
                                    </span>
                                    <div className='text-center'>
                                        <h3 className='text-xl font-bold mb-2'>{box.title}</h3>
                                        <p className='text-gray-600 dark:text-gray-300 mb-4'>{box.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Features2;
