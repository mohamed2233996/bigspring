'use client'
import Posts from '@/data/blogData';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const Page = ({ params }) => {
    const [responses, setResponses] = useState(4)
    const id = params.id
    const post = Posts.find(post => post.id = id)

    return (
        <section className='section py-20 transition-all'>
            <div className="container m-auto">
                <div className="flex flex-col items-center">
                    <article className='lg:w-3/4'>
                        <div className='rounded-lg overflow-hidden relative'>
                            <Image src={post.img} alt={post.id} className='w-full' />
                        </div>
                        <div className='flex flex-row flex-nowrap items-center mt-6 mb-4'>
                            <div className='rounded-full overflow-hidden'>
                                <Image src={post?.author.img} width={25} height={25} alt={post.author.name} />
                            </div>
                            <p className='text-gray-600 dark:text-gray-300 ml-2'>by <Link className=' text-black dark:text-white hover:text-primary font-bold' href={`Blog/authors/${post.author.name.replace(/ /, '-')}`}>{post.author.name}</Link></p>
                            <div className=' ml-3 flex flex-row flex-nowrap items-center text-gray-600 dark:text-gray-300'>
                                <FaCalendarAlt />
                                <span className='ml-2'>{post?.createdAt}</span>
                            </div>
                        </div>
                        <h1 className='text-3xl font-bold mb-2'>{post.title}</h1>
                        {post.content.part1.map(
                            (item, index) => (
                                <p key={index} className='text-gray-600 dark:text-gray-300 mb-8'>{item}</p>
                            ))}
                        <blockquote className='flex flex-col border border-l-primary border-gray-400 dark:border-gray-300 mb-8 rounded-lg py-6 px-4'>
                            <p className='text-gray-600 dark:text-gray-300 text-sm font-bold mb-8'>{post.content.Quotation.text}</p>
                            <cite className='font-bold'>{post.content.Quotation.author}</cite>
                        </blockquote>
                        {post.content.part2.map(
                            (item, index) => (
                                <p key={index} className='text-gray-600 dark:text-gray-300 mb-8'>{item}</p>
                            ))}
                        {/* iframe for ads */}
                        <div className="flex flex-col items-center mt-8">
                            This Space for Ads
                        </div>
                        <div className='flex flex-col justify-center items-center mt-8'>
                            <h3 className='text-2xl font-bold mb-4'>What do you think?</h3>
                            <p>{responses} Responses</p>
                            <div className='flex flex-row gap-4 mt-4'>
                                <button onClick={
                                    () => setResponses(responses + 1)
                                } className='flex flex-col items-center w-16 px-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color='#FF0000' fill="none">
                                        <path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                    </svg>
                                    <p className='font-bold mt-2'>Like</p>
                                </button>
                                <button onClick={
                                    () => setResponses(responses + 1)
                                } className='flex flex-col items-center w-16 px-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="#FF0000" fill="none">
                                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M9 16.9998C9.83563 16.372 10.8744 16 12 16C13.1256 16 14.1644 16.372 15 16.9998" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M7 8.01067C7 8.01067 8.40944 7.88341 9.19588 8.50798M9.19588 8.50798L8.93275 9.34267C8.82896 9.67191 9.10031 10 9.4764 10C9.87165 10 10.1327 9.64338 9.92918 9.33476C9.74877 9.06118 9.50309 8.75196 9.19588 8.50798ZM14 8.01067C14 8.01067 15.4094 7.88341 16.1959 8.50798M16.1959 8.50798L15.9328 9.34267C15.829 9.67191 16.1003 10 16.4764 10C16.8717 10 17.1327 9.64338 16.9292 9.33476C16.7488 9.06118 16.5031 8.75196 16.1959 8.50798Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <p className='font-bold mt-2'>unhappy</p>
                                </button>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}


export default Page;
