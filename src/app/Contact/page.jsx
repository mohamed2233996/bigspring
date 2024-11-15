import React from 'react';

const Page = () => {
    return (
        <div className='py-24 transition-all'>
            <div className="container m-auto">
                <h1 className="text-5xl text-center font-bold mb-20">Contact Us</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                        <h2 className='text-3xl font-bold mb-4'>Why you should contact us</h2>
                        <p className='text-gray-600 dark:text-gray-300 mb-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit recusandae voluptates doloremque veniam temporibus porro culpa ipsa, nisi soluta minima saepe laboriosam debitis nesciunt.</p>
                        <ul className=' list-disc marker:text-primary pl-6'>
                            <li className='mb-4 font-bold text-gray-600 dark:text-gray-300'>Phone :
                                <a className='text-primary underline ml-3' href="tel:+201025402633">+201025402633</a>
                            </li>
                            <li className='mb-4 font-bold text-gray-600 dark:text-gray-300'>Email :
                                <a className='text-primary underline ml-3' href="mailto:medomano771@gmail.com">medomano771@gmail.com</a>
                            </li>
                            <li className='mb-4 font-bold text-gray-600 dark:text-gray-300'>Address : Menof, Monofia, Egypt</li>
                        </ul>
                    </div>
                    <form action="">
                        <div className="flex md:gap-6 items-center flex-col md:flex-row">
                            <label className='block mb-4 lg:w-1/2 w-full' htmlFor="first-name">
                                <div className="mb-2 font-medium">
                                    First Name
                                    <span className='text-red-500'>*</span>
                                </div>
                                <input type="text" placeholder="First Name" className="block w-full bg-transparent border border-border rounded-md p-3 focus:border-primary foucs:outline-none focus:ring-0 focus:shadow-none transition" required />
                            </label>
                            <label className='block mb-4 lg:w-1/2 w-full' htmlFor="last-name">
                                <div className="mb-2 font-medium">
                                    Last Name
                                    <span className='text-red-500'>*</span>
                                </div>
                                <input type="text" placeholder="Last Name" className="block w-full bg-transparent border border-border rounded-md p-3 focus:border-primary foucs:outline-none focus:ring-0 focus:shadow-none transition" required />
                            </label>
                        </div>
                        <label className='block mb-4' htmlFor="email">
                            <div className="mb-2 font-medium">
                                Email Address
                                <span className='text-red-500'>*</span>
                            </div>
                            <input type="email" placeholder="Email Address" className="block w-full bg-transparent border border-border rounded-md p-3 focus:border-primary foucs:outline-none focus:ring-0 focus:shadow-none transition" required />
                        </label>
                        <label className='block mb-4' htmlFor="message">
                            <div className="mb-2 font-medium">
                                Message
                                <span className='text-red-500'>*</span>
                            </div>
                            <textarea placeholder="Your Message" className="block w-full bg-transparent border border-border rounded-md p-3 focus:border-primary foucs:outline-none focus:ring-0 focus:shadow-none transition" rows="6" required></textarea>
                        </label>
                        <button type="submit" className="block w-full mt-4 px-6 py-4 font-bold text-white bg-primary rounded-full hover:bg-primaryH transition-all">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Page;
