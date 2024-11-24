'use client'
import Posts from '@/data/blogData';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaCalendarAlt, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";


const Page = (params) => {


    const [auther, setAuther] = useState("")
    const [autherPosts, setAutherPosts] = useState([])
    const [authorInfo, setAuthorInfo] = useState({})
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setAuther(decodeURIComponent(params.params.authorName).replace(/-/, ' '))
    }, [])

    useEffect(() => {
        const filteredPosts = Posts.filter(post => post.author.name === auther)
        setAutherPosts(filteredPosts)

        if (filteredPosts.length > 0) {
            const authorInfo = filteredPosts[0].author
            setAuthorInfo(authorInfo)
        }

        setLoading(false)
    }, [auther])


    return (
        <div className='py-20 transition-all'>
            <div className="container m-auto flex items-center flex-col">
                {
                    loading ?
                        <div className="text-center animate-fadeIn">
                            <div className="w-32 h-32 border-4 border-t-4 border-primary border-solid rounded-full mx-auto animate-spinBounce"></div>
                            <p className="mt-4 text-2xl font-bold text-gray-600">
                                Loading...
                            </p>
                        </div>
                        : <>
                            <div className='rounded-full overflow-hidden'>
                                <Image src={authorInfo?.img} width={120} height={120} alt={authorInfo?.name} />
                            </div>
                            <h1 className="text-5xl text-center font-bold my-6 first-letter:capitalize">{authorInfo?.name}</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-300 text-center mb-6">{authorInfo?.text}</p>
                            <div className="flex flex-row gap-4">
                                <a href="#" className='cursor-pointer border p-2 text-primary bg-transparent rounded-full border-primary hover:bg-primary hover:text-white'>
                                    <FaFacebook className='text-xl' />
                                </a>
                                <a href="#" className='cursor-pointer border p-2 text-primary bg-transparent rounded-full border-primary hover:bg-primary hover:text-white'>
                                    <FaLinkedin className='text-xl' />
                                </a>
                                <a href="#" className='cursor-pointer border p-2 text-primary bg-transparent rounded-full border-primary hover:bg-primary hover:text-white'>
                                    <FaTwitter className='text-xl' />
                                </a>
                            </div>
                        </>
                }
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20">
                    {autherPosts?.map((post) => (
                        <div key={post.id} className="flex gap-4 flex-col">
                            <div className='rounded-lg overflow-hidden relative'>
                                <Image className='w-full' src={post?.img} alt={post.id} />
                            </div>
                            <div className=''>
                                <div className='flex flex-row flex-nowrap items-center mb-4'>
                                    <div className='rounded-full overflow-hidden'>
                                        <Image src={post?.author.img} width={25} height={25} alt={post.author.name} />
                                    </div>
                                    <p className='text-gray-600 dark:text-gray-300 ml-2'>by <Link className='dark:text-white text-black hover:text-primary font-bold' href={`Blog/authors/${post.author.name}`}>{post.author.name}</Link></p>
                                    <div className=' ml-3 flex flex-row flex-nowrap items-center text-gray-600 dark:text-gray-300'>
                                        <FaCalendarAlt />
                                        <span className='ml-2'>{post?.createdAt}</span>
                                    </div>
                                </div>
                                <Link href={`/Blog/${post?.href}`} className='sm:text-3xl text-2xl mb-4 font-bold hover:text-primary'>{post?.title}</Link>
                                <p className='text-gray-600 dark:text-gray-300 mb-8'>{post?.content.Quotation.text.split(" ", 4).join(' ')}</p>
                                <Link href={`/Blog/${post?.href}`} className='px-6 py-4 rounded-full text-white font-bold bg-primary hover:bg-primaryH transition-all'>
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Page;
