import Posts from '@/data/blogData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCalendarAlt } from "react-icons/fa";

const Page = () => {
    const selectPost = Posts[4]

    return (
        <div className='py-20 transition-all'>
            <div className="container m-auto flex items-center flex-col">
                <h1 className="text-4xl text-center font-bold mb-4">Latest News</h1>
                <p className="text-sm text-gray-500 dark:text-gray-300 text-center mb-6">Read all latest blog posts</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
                    <div className='col-span-3'>
                        <div className="flex gap-8 flex-col md:flex-row">
                            <div className='rounded-lg overflow-hidden md:w-1/2 relative'>
                                <Image className='w-full' src={selectPost?.img} alt={selectPost.id} />
                            </div>
                            <div className='md:w-1/2'>
                                <div className='flex flex-row flex-nowrap items-center mb-4'>
                                    <div className='rounded-full overflow-hidden'>
                                        <Image src={selectPost?.author.img} width={25} height={25} alt={selectPost.author.name} />
                                    </div>
                                    <p className='text-gray-600 dark:text-gray-300 ml-2'>by <Link className=' text-black dark:text-white hover:text-primary font-bold' href={`Blog/authors/${selectPost.author.name.replace(/ /, '-')}`}>{selectPost.author.name}</Link></p>
                                    <div className=' ml-3 flex flex-row flex-nowrap items-center text-gray-600 dark:text-gray-300'>
                                        <FaCalendarAlt />
                                        <span className='ml-2'>{selectPost?.createdAt}</span>
                                    </div>
                                </div>
                                <Link href={`/Blog/post/${selectPost?.id}`} className='sm:text-3xl text-2xl mb-4 font-bold hover:text-primary'>{selectPost?.title}</Link>
                                <p className='text-gray-600 dark:text-gray-300 mb-8'>{selectPost?.content.Quotation.text.split(" ", 4).join(' ')}</p>
                                <Link href={`/Blog/post/${selectPost?.id}`} className='px-6 py-4 rounded-full text-white font-bold bg-primary hover:bg-primaryH transition-all'>
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                    {
                        Posts.map((post) => {
                            return (
                                <div key={post.id} className="flex gap-4 flex-col">
                                    <div className='rounded-lg overflow-hidden relative'>
                                        <Image className='w-full' src={post?.img} alt={post.id} />
                                    </div>
                                    <div className=''>
                                        <div className='flex flex-row flex-nowrap items-center mb-4'>
                                            <div className='rounded-full overflow-hidden'>
                                                <Image src={post?.author.img} width={25} height={25} alt={post.author.name} />
                                            </div>
                                            <p className='text-gray-600 dark:text-gray-300 ml-2'>by <Link className='dark:text-white text-black hover:text-primary font-bold' href={`Blog/authors/${post.author.name.replace(/ /, '-')}`}>{post.author.name}</Link></p>
                                            <div className=' ml-3 flex flex-row flex-nowrap items-center text-gray-600 dark:text-gray-300'>
                                                <FaCalendarAlt />
                                                <span className='ml-2'>{post?.createdAt}</span>
                                            </div>
                                        </div>
                                        <Link href={`/Blog/post/${post?.id}`} className='sm:text-3xl text-2xl mb-4 font-bold hover:text-primary'>{post?.title}</Link>
                                        <p className='text-gray-600 dark:text-gray-300 mb-8'>{post?.content.Quotation.text.split(" ", 4).join(' ')}</p>
                                        <Link href={`/Blog/post/${post?.id}`} className='px-6 py-4 rounded-full text-white font-bold bg-primary hover:bg-primaryH transition-all'>
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Page;
