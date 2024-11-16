import React from 'react';
import img1 from '@/imges/videoT-About.webp'
import Imgwithtext from '@/components/imgwithtext';
import { FaBlenderPhone ,FaSync } from "react-icons/fa";
import img2 from '@/imges/about1.webp'
import img3 from '@/imges/about2.webp'
import videoThumnail from '@/imges/videoT-About.webp'
import Image from 'next/image';
import Videomation from '@/components/videomation';
import About from '@/app/_section/about';
import Opinions from '@/app/_section/opinions';
import Teams from '@/app/_section/teams';
import Contact from '@/app/_section/Contact';

const Page = () => {
    return (
        <div>
            <Imgwithtext
                bg={"bg-themeLight dark:bg-themeDark"}
                title={"Customer Relationship Management"}
                text={"Create a best strategic tool share it with your team and ensure it’s on track with intuitive dashboards. Simple enough with the sophistication and flexibility to meet the needs"}
                textEnd={false}
                bigGap={true}
                order={true}
                itemsStart={false}
                ImgCarousel={false}
                ImgSrc={img1}
                btn={true}
                btnText={"Try for Free"}
                btnLink={"/contact"}
            />
            <section className='py-20 transition-all'>
                <div className="container m-auto">
                    <h2 className='text-4xl font-bold text-center mb-8 leading-[3rem]'>CRM for every business<br />for every industry</h2>
                    <p className='text-gray-600 dark:text-gray-300 mb-4 text-center w-1/2 m-auto'>CRM brings the best of general purpose solutions and vertical solutions under one roof. We're empowering you to redesign the user interface of the CRM and create a personalized instance that meets your specific requirements and preferences</p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-14">
                        <div className="flex flex-col items-start gap-8">
                            <FaBlenderPhone className='text-primary text-[50px]' />
                            <h2 className='font-bold text-3xl'>Omnichannel Communication</h2>
                            <p className='font-bold'>Connect with your customers wherever they are</p>
                            <p className='text-gray-600 dark:text-gray-300'>Multiple channels one platform for communication. Customers have more ways to interact with businesses than ever before.</p>
                            <ul className='list-disc marker:text-primary text-gray-600 dark:text-gray-300 pl-6'>
                                <li className='mb-4'>Reach customers across every channel: telephone email live chat and social media</li>
                                <li className='mb-4'>Get real-time notifications when customers interact with your business</li>
                                <li>Measure the effectiveness of your customer communication and find the best time and channel to reach out to your customers</li>
                            </ul>
                        </div>
                        <div className="flex flex-col items-start gap-8">
                            <FaSync className='text-primary text-[50px]' />
                            <h2 className='font-bold text-3xl'>Real Time Reports</h2>
                            <p className='font-bold'>Get real-time reports and insights</p>
                            <p className='text-gray-600 dark:text-gray-300'>Create customized dashboards with analytical widgets for sales such as charts target meters KPIs and funnels.</p>
                            <ul className='list-disc marker:text-primary text-gray-600 dark:text-gray-300 pl-6'>
                                <li className='mb-4'>Make smarter business decisions with powerful real-time analytics</li>
                                <li className='mb-4'>Measure and manage your organizations territory-wide sales performance</li>
                                <li>Track key performance indicators including current trends and future predictions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-20 bg-themeLight dark:bg-themeDark transition-all'>
                <div className="container m-auto">
                    <h2 className='w-1/4 font-bold text-3xl mb-6'>New experiments Launch in minutes</h2>
                    <p className='w-1/2 text-gray-600 dark:text-gray-300 mb-4'>Both non-technical and technical users can design and launch new experiments quickly. Distinctio cumque totam explicabo quia minima quae esse! Laudantium impedit ratione dignissimos.</p>
                    <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className='flex flex-col gap-6'>
                            <div>
                                <h3 className='text-2xl font-bold mb-2'>For Marketing Teams</h3>
                                <p className='text-gray-600 dark:text-gray-300'>Adipiscing elit Consequat tristique eget amet tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. tempus eu at consecttur.</p>
                            </div>
                            <div>
                                <h3 className='text-2xl font-bold mb-2'>For Product & Engineering</h3>
                                <p className='text-gray-600 dark:text-gray-300'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Consequat tristique eget amet tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.</p>
                            </div>
                        </div>
                        <div className='overflow-hidden rounded-lg'>
                            <Image src={img2} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className='flex flex-col gap-6'>
                            <div>
                                <h3 className='text-2xl font-bold mb-2'>For Design Teams</h3>
                                <p className='text-gray-600 dark:text-gray-300'>Adipiscing elit Consequat tristique eget amet tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. tempus eu at consecttur.</p>
                            </div>
                            <div>
                                <h3 className='text-2xl font-bold mb-2'>For Search Engine Optimization</h3>
                                <p className='text-gray-600 dark:text-gray-300'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Consequat tristique eget amet tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.</p>
                            </div>
                        </div>
                        <div className='overflow-hidden rounded-lg'>
                            <Image src={img3} />
                        </div>
                    </div>
                </div>
            </section>
            <Videomation
                headingText="Check out our video preview"
                pText="Lorem ipsum dolor sit amet consectetur adipiscing elit. Morbi egestas Werat viverra id et aliquet. vulputate egestas sollicitudin."
                videoThumnail={videoThumnail}
                videohref='https://www.youtube.com/embed/dyZcRRWiuuw?autoplay=1&mute=1'
            />
            <About />
            <Opinions />
            <Teams />
            <Contact />
        </div>
    );
}

export default Page;
