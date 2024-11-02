import featuresNums from '@/data/ourNumbersData';
import React from 'react';

const OurNumbers = () => {
    return (
        <section className='py-20 transition-all'>
            <div className="container m-auto">
                <div className="flex items-center flex-wrap justify-center gap-10">
                    {
                        featuresNums.map((num, key) => (
                            <div key={key} className="flex flex-col items-center gap-2 px-2">
                                <div className="text-center text-primary">
                                    {num.icon}
                                </div>
                                <h2 className='mb-4'>{`${num.rate}%`}</h2>
                                <p className='text-gray-600 dark:text-gray-300'>{num.text1}</p>
                                <p className='text-gray-600 dark:text-gray-300'>{num.text2}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default OurNumbers;
