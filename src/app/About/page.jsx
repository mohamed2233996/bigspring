import Imgwithtext from '@/components/imgwithtext';
import React from 'react';
import aboutImg from "@/imges/about.webp"
import { aboutOpinion } from '@/data/opinionsData';
import Image from 'next/image';
import OurNumbers from '@/app/_section/ourNumbers';

const Page = () => {
    return (
        <>
            <Imgwithtext
                title="Give Your Team The Design Mindset & Tools"
                text="Create a best strategic tool, share it with your team and ensure it’s on track with intuitive dashboards. Simple enough with the flexibility Lorem ipsum dolor sit amet consectetur adipisicing elit."
                order={true}
                ImgCarousel={false}
                ImgSrc={aboutImg}
            />
            <section className='bg-themeLight dark:bg-themeDark py-20 transition-all'>
                <div className="container m-auto">
                    <div className='flex items-center flex-col gap-10'>
                        <p className='text-xl w-1/2 text-center font-bold'>{aboutOpinion.comment}</p>
                        <div className='flex flex-col items-center gap-2'>
                            <Image className='rounded-full' src={aboutOpinion.img} alt={aboutOpinion.name} />
                            <h2 className='font-bold text-xl mt-4'>{aboutOpinion.name}</h2>
                            <p className='text-gray-600 dark:text-gray-300'>{aboutOpinion.location}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
                        <div className="bg-white dark:bg-boxColor py-8 px-4 shadow-lg rounded-lg flex flex-col">
                            <h3 className='text-3xl font-bold mb-6'>Who we are?</h3>
                            <p className='text-gray-600 dark:text-gray-300 mb-4'>We started in 2018 because we believe we can change the way organizations use data to make better decisions for their customers. We’ve been blown away by the impact BI has had on data quality and developer productivity for our customers.</p>
                            <p className='text-gray-600 dark:text-gray-300'>From startups to consumer it’s been incredible to see our product fundamentally change the way PMs, devs and data scientists collaborate to track and govern their analytics.</p>
                        </div>
                        <div className="bg-white dark:bg-boxColor py-8 px-4 shadow-lg rounded-lg flex flex-col">
                            <h3 className='text-3xl font-bold mb-6'>Our mission</h3>
                            <p className='text-gray-600 dark:text-gray-300 mb-4'>Companies have never had to understand their customers better or faster. Consumers choose the product with the best experience and companies can’t afford to stall product decisions while waiting days or weeks for answers from a centralized BI team.</p>
                            <p className='text-gray-600 dark:text-gray-300'>The industry gold standard has become to decentralize business intelligence, so that every team is autonomous in making data-driven decisions quickly.</p>
                        </div>
                    </div>
                </div>
                <OurNumbers />
            </section>
        </>
    );
}

export default Page;
