import ourTeam from '@/data/ourTeam';
import Image from 'next/image';
import React from 'react';
import { BsFacebook, BsGithub, BsTwitter } from "react-icons/bs";

const Page = () => {
    return (
        <>
            <div className='py-20 transition-all'>
                <div className="container m-auto flex items-center flex-col">
                    <h2 className='text-4xl font-bold'>Our Team</h2>
                    <p className='text-gray-600 dark:text-gray-300'>Meet our team</p>
                    <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-14">
                        {ourTeam?.map((person , key)=>{
                            return (
                                <div key={key} className='flex items-center flex-col rounded-lg overflow-hidden'>
                                    <Image className='' src={person.image} alt={person.name} />
                                    <h3 className='text-2xl font-bold my-2'>{person.name}</h3>
                                    <p className='text-gray-600 dark:text-gray-300 mb-4'>{person.position}</p>
                                    <div className='flex flex-row gap-4 mb-6'>
                                        <BsFacebook className='text-primary text-lg hover:opacity-65 transition-all' />
                                        <BsGithub className='text-primary text-lg hover:opacity-65 transition-all' />
                                        <BsTwitter className='text-primary text-lg hover:opacity-65 transition-all' />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;
