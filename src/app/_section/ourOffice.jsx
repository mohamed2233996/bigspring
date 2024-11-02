import React from 'react';
import officeImg1 from '@/imges/office1.webp'
import officeImg2 from '@/imges/office2.webp'
import officeImg3 from '@/imges/office3.webp'
import officeImg4 from '@/imges/office4.webp'
import officeImg5 from '@/imges/office5.webp'
import officeImg6 from '@/imges/office6.webp'
import Image from 'next/image';

const OurOffice = () => {
    return (
        <section className='py-20 transition-all'>
            <div className="container m-auto">
                <div className='flex justify-center flex-wrap'>
                    <div className='p-4 xl:w-1/4 lg:w-1/3 sm:w-1/2'>
                        <h2 className='font-bold text-4xl mb-4'>Our Office Culture</h2>
                        <p className='text-gray-600 dark:text-gray-300'>Create a best strategic tool, share it with your team and ensure it’s on track with intuitive dashboards.</p>
                    </div>
                    <div className='p-4 xl:w-1/4 lg:w-1/3 sm:w-1/2'>
                        <Image src={officeImg2} className='w-full object-cover h-full rounded-lg' alt='' />
                    </div>
                    <div className='p-4 sm:w-1/2'>
                        <Image src={officeImg1} className='w-full object-cover h-full rounded-lg' alt='' />
                    </div>
                    <div className='p-4 xl:w-1/4 lg:w-1/3 sm:w-1/2'>
                        <Image src={officeImg4} className='w-full object-cover h-full rounded-lg' alt='' />
                    </div>
                    <div className='p-4 sm:w-1/2'>
                        <Image src={officeImg5} className='w-full object-cover h-full rounded-lg' alt='' />
                    </div>
                    <div className='p-4 xl:w-1/4 lg:w-1/3 sm:w-1/2'>
                        <Image src={officeImg6} className='w-full object-cover h-full rounded-lg' alt='' />
                    </div>
                    <div className='p-4 sm:w-1/2'>
                        <Image src={officeImg3} className='w-full object-cover h-full rounded-lg' alt='' />
                    </div>
                    <div className='p-4 xl:w-5/12 lg:w-10/12'>
                        <h2 className='font-bold text-4xl mb-4'>Want to Join our Team?</h2>
                        <p className='text-gray-600 dark:text-gray-300 mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat eget amtempus eu at consecttur.</p>
                        <a href='/careers' className='font-bold text-primary border border-primary rounded-3xl transition py-2 px-4 hover:bg-primary hover:text-white'>View open Positions</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurOffice;
