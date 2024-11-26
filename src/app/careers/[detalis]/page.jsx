import Careers from '@/data/CareerData';
import Link from 'next/link';
import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';

const Page = ({ params }) => {
    const career = Careers.find(career => career.page.href === params.detalis);
    if (!career) {
        return <div>No career found</div>;
    }
    return (
        <div data-aos="fade-up" className='py-20 transition-all'>
            <div className="container m-auto flex items-center flex-col">
                <h1 className="text-5xl text-center font-bold mb-20">{career.title}</h1>
                <div className='flex flex-col justify-between lg:flex-row gap-8'>
                    <div className="lg:w-2/3">
                        <div>
                            <h2 className='text-3xl font-bold mb-6'>What Is the role?</h2>
                            <p className='text-gray-500 dark:text-gray-300 mb-4'>{career.page.Data.role}</p>
                        </div>
                        <div>
                            <h2 className='text-3xl font-bold mb-6'>Why join Delta’s People team?</h2>
                            <p className='text-gray-500 dark:text-gray-300 mb-4'>{career.page.Data.Why_join}</p>
                        </div>
                        <div>
                            <h2 className='text-3xl font-bold mb-6'>Some of the high impact opportunities you’ll tackle?</h2>
                            <ul className='list-decimal marker:text-primary marker:text-xl pl-4'>
                                {career.page.Data.high_impact.map((opportunity, index) => (
                                    <li key={index} className='text-gray-500 dark:text-gray-300 mb-4'>{opportunity}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 className='text-3xl font-bold mb-6'>Responsibilities</h2>
                            <ul className=' list-disc marker:text-primary marker:text-xl pl-4'>
                                {career.page.Data.Responsibilities.map((Responsibilitie, index) => (
                                    <li key={index} className='text-gray-500 dark:text-gray-300 mb-4'>{Responsibilitie}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 className='text-3xl font-bold mb-6'>Requirements</h2>
                            <p className='text-gray-500 dark:text-gray-300 mb-4'>{career.page.Data.Requirements}</p>
                        </div>
                        <div>
                            <h2 className='text-3xl font-bold mb-6'>This opportunity is for you if you have/are</h2>
                            <ul className=' list-disc marker:text-primary marker:text-xl pl-4'>
                                {career.page.Data.you_have.map((item, index) => (
                                    <li key={index} className='text-gray-500 dark:text-gray-300 mb-4'>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-6 lg:w-1/3">
                        <div className='py-8 px-6 rounded-md bg-white dark:bg-themeDark shadow-md'>
                            <form action="">
                                <label className='block mb-4' htmlFor="first-name">
                                    <div className="mb-2 font-medium">
                                        First Name
                                        <span className='text-red-500'>*</span>
                                    </div>
                                    <input type="text" placeholder="First Name" className="block w-full border border-border rounded-md dark:border-themeDark p-3 focus:border-primary foucs:outline-none focus:ring-0 focus:shadow-none transition dark:bg-themeDark" required />
                                </label>
                                <label className='block mb-4' htmlFor="last-name">
                                    <div className="mb-2 font-medium">
                                        Last Name
                                        <span className='text-red-500'>*</span>
                                    </div>
                                    <input type="text" placeholder="Last Name" className="block w-full border border-border rounded-md dark:border-themeDark p-3 focus:border-primary foucs:outline-none focus:ring-0 focus:shadow-none transition dark:bg-themeDark" required />
                                </label>
                                <label className='block mb-4' htmlFor="email">

                                    <div className="mb-2 font-medium">
                                        Email Address
                                        <span className='text-red-500'>*</span>
                                    </div>
                                    <input type="email" placeholder="Email Address" className="block w-full border border-border rounded-md dark:border-themeDark p-3 focus:border-primary foucs:outline-none focus:ring-0 focus:shadow-none transition dark:bg-themeDark" required />
                                </label>
                                <label className='block mb-4' htmlFor="file-upload">
                                    <div className="mb-2 font-medium">
                                        Upload CV
                                        <span className='text-red-500'>*</span>
                                    </div>
                                    <input type="file" placeholder="Resume" className="block w-full dark:border-themeDark transition dark:bg-themeDark" required />
                                    <span className='text-sm font-bold text-gray-600 dark:text-gray-300'>only doc, pdf file allowed & file size will be less than 2MB</span>
                                </label>
                                <button type="submit" className="block w-full px-6 py-4 font-bold text-white bg-primary rounded-full hover:bg-primaryH transition-all">
                                    Apply Now
                                </button>
                            </form>
                            <div className='mt-8 flex flex-row items-center gap-4'>
                                <span className='font-bold text-gray-600 dark:text-gray-300'>Share this job:</span>
                                <div className="flex flex-row items-center gap-2">
                                    <a href="#" className='text-lg text-gray-500 dark:text-gray-300 hover:text-primary transition-all'>
                                        <BsFacebook />
                                    </a>
                                    <a href="#" className='text-lg text-gray-500 dark:text-gray-300 hover:text-primary transition-all'>
                                        <BsTwitter />
                                    </a>
                                    <a href="#" className='text-lg text-gray-500 dark:text-gray-300 hover:text-primary transition-all'>
                                        <BsLinkedin />
                                    </a>
                                    <a href="#" className='text-lg text-gray-500 dark:text-gray-300 hover:text-primary transition-all'>
                                        <BsInstagram />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='py-8 px-6 rounded-md bg-white dark:bg-themeDark shadow-md'>
                            <h2 className='text-2xl font-bold mb-6'>Other Jobs</h2>
                            <div className='flex flex-col gap-6'>
                                {Careers.slice(0, 4).map((item) => {
                                    return (
                                        <Link key={item.id} href={""} className='flex flex-col px-4 py-5 rounded-lg shadow-md border border-gray-300 hover:shadow-lg hover:-translate-y-2 transition-all'>
                                            <h3 className="font-bold mb-4">{item.title}</h3>
                                            <p className="text-gray-600 dark:text-gray-300">{`${item.time} | ${item.type}`}</p>
                                        </Link>
                                    )
                                })}
                                <Link href={"/careers"} className='flex justify-center text-primary items-center px-4 py-5 border border-primary rounded-full hover:text-white dark:hover:text-themeDark hover:bg-primary transition-all'>
                                    View All Jobs →
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Page;
