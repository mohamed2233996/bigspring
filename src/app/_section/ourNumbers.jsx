'use client'

import featuresNums from '@/data/ourNumbersData';
import React, { useEffect, useState } from 'react';

const OurNumbers = () => {
    const [counts, setCounts] = useState(Array(featuresNums.length).fill(0));

    useEffect(() => {
        const timers = featuresNums.map((num, index) => {
            if (counts[index] < num.rate) {
                return setInterval(() => {
                    setCounts(prevCounts => {
                        const newCounts = [...prevCounts];
                        newCounts[index] = Math.min(newCounts[index] + 1, num.rate);
                        return newCounts;
                    });
                }, 10);
            }
            return null;
        });

        return () => {
            timers.forEach(timer => {
                if (timer) clearInterval(timer); 
            });
        };
    }, [counts]);

    return (
         <section data-aos="fade-up"  className='py-20 transition-all'>
            <div className="container m-auto">
                <div className="flex items-center flex-wrap justify-center gap-10">
                    {
                        featuresNums.map((num, index) => (
                            <div key={index} className="flex flex-col items-center gap-2 px-2">
                                <div className="text-center text-primary">
                                    {num.icon}
                                </div>
                                <h2 className='mb-4 font-bold text-3xl'>{`${counts[index]}%`}</h2>
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
