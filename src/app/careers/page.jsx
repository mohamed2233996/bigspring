import Careers from '@/data/CareerData';
import Link from 'next/link';
import React from 'react';

const Page = () => {
    return (
        <div className='py-20 transition-all'>
            <div className="container m-auto flex items-center flex-col">
                <h1 className="text-5xl text-center font-bold mb-4">Career</h1>
                <p className="text-sm text-gray-500 dark:text-gray-300 text-center mb-6">Give your team the design mindset & design tools</p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
                    {Careers?.map((item) => {
                        return (
                            <li key={item.id} className='list-none'>
                                <Link href={`careers/${item.page.href}`}>
                                    <div className="flex flex-col py-8 px-8 careerBox bg-white dark:bg-themeDark border border-gray-200 dark:border-gray-800 hover:border-none rounded-lg shadow-sm hover:shadow-md hover:-translate-y-2 transition-all">
                                        <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-300">{`${item.time} | ${item.type}`}</p>
                                        <div className='flex flex-row gap-2 items-center mt-6 '>
                                            <span className="text-primary">{item.page.text}</span>
                                            <span className="text-primary careerLink">→</span>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Page;
