import links from '@/data/navData';
import Link from 'next/link';
import React from 'react';

const Page = () => {
    const lastItem = "View All Product"
    const productsData = links.find(
        link => link.href === '/Products'
    ).subLinks.filter(item => item.label.text !== lastItem)


    return (
        <div data-aos="fade-up" className='py-24 transition-all'>
            <div className="container m-auto">
                <h1 className="text-5xl text-center font-bold mb-4">All Products</h1>
                <p className='text-gray-600 dark:text-gray-300 mb-4 text-center'>The Operation System for your Business</p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
                    {productsData.map((product, key) => {
                        return (
                            <div key={key} className='flex items-start flex-col border border-gray-300 bg-white rounded-lg p-8'>
                                <span className='text-primary'>{product.label.svg}</span>
                                <h3 className='text-xl font-bold my-8'>{product.label.text}</h3>
                                <p className='mb-4 text-gray-600 dark:text-gray-300'>{product.label.p}</p>
                                <Link href={product.href} className='flex flex-row items-center text-primary hover:text-primaryH'>
                                    View Product
                                    <span className='ml-2'>
                                        →
                                    </span>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Page;
