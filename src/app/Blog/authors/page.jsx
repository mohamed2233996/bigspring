"use client"
import Posts from '@/data/blogData';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Page = () => {
    const [authers, setAuthers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const authers = [...new Set(Posts.map(post => post.author))]
        const uniqueItems = authers.filter((author, index, self) =>
            index === self.findIndex((t) => t.name === author.name)
        )

        setLoading(false)
        setAuthers(uniqueItems)

    }, [])
    console.log(authers)



    return (
        <div className='py-20 transition-all'>
            <div className="container m-auto flex items-center flex-col">
                <h1 className="text-4xl text-center font-bold mb-8">Author</h1>
                {
                    loading ?
                        <div className="text-center animate-fadeIn">
                            <div className="w-32 h-32 border-4 border-t-4 border-primary border-solid rounded-full mx-auto animate-spinBounce"></div>
                            <p className="mt-4 text-2xl font-bold text-gray-600">
                                Loading...
                            </p>
                        </div>
                        :
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 mt-20'>
                            {authers.map((author) =>
                                <div key={author.name} className='flex flex-col justify-center items-center'>
                                    <div className='rounded-full overflow-hidden'>
                                        <Image src={author?.img} width={80} height={80} alt={author?.name} />
                                    </div>
                                    <h1 className="text-2xl font-bold my-6 first-letter:capitalize">
                                        <Link href={`Blog/authors/${author.name.replace(/ /, '-')}`} >{author?.name}</Link>
                                    </h1>
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
                                    <p className="text-sm text-gray-500 dark:text-gray-300 text-center mt-6">{author?.text}</p>
                                </div>
                            )}
                            <div />
                        </div>
                }
            </div>
        </div>
    )
}

export default Page;
