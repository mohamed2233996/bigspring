import React from 'react';
import img1 from '@/imges/videoT-About.webp'
import Imgwithtext from '@/components/imgwithtext';
import img2 from '@/imges/about1.webp'
import img3 from '@/imges/about2.webp'
import videoThumnail from '@/imges/videoT-About.webp'
import Image from 'next/image';
import Videomation from '@/components/videomation';
import About from '@/app/_section/about';
import Contact from '@/app/_section/Contact';


const Page = () => {
    return (
        <div>
            <Imgwithtext
                bg={""}
                title={"Help Desk"}
                text={"Create a best strategic tool, share it with your team and ensure it’s on track with intuitive dashboards. Simple enough with the sophistication and flexibility to meet the needs"}
                textEnd={false}
                bigGap={true}
                order={true}
                itemsStart={false}
                ImgCarousel={false}
                ImgSrc={img2}
                btn={true}
                btnText={"Try for Free"}
                btnLink={"/contact"}
            />
             <section data-aos="fade-up"  className='py-20 bg-themeLight dark:bg-themeDark transition-all'>
                <div className="container m-auto">
                    <h2 className='w-1/4 font-bold text-3xl mb-6'>New experiments Launch in minutes</h2>
                    <p className='w-1/2 text-gray-600 dark:text-gray-300 mb-4'>Both non-technical and technical users can design and launch new experiments quickly. Distinctio cumque totam explicabo, quia minima quae esse! Laudantium impedit ratione dignissimos.</p>
                    <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className='flex flex-col gap-6'>
                            <div>
                                <h3 className='text-2xl font-bold mb-2'>For Marketing Teams</h3>
                                <p className='text-gray-600 dark:text-gray-300'>Adipiscing elit Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. tempus eu at consecttur.</p>
                            </div>
                            <div>
                                <h3 className='text-2xl font-bold mb-2'>For Product & Engineering</h3>
                                <p className='text-gray-600 dark:text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.</p>
                            </div>
                        </div>
                        <div className='overflow-hidden rounded-lg'>
                            <Image src={img1} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className='flex flex-col gap-6'>
                            <div>
                                <h3 className='text-2xl font-bold mb-2'>For Design Teams</h3>
                                <p className='text-gray-600 dark:text-gray-300'>Adipiscing elit Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. tempus eu at consecttur.</p>
                            </div>
                            <div>
                                <h3 className='text-2xl font-bold mb-2'>For Search Engine Optimization</h3>
                                <p className='text-gray-600 dark:text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.</p>
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
                pText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas Werat viverra id et aliquet. vulputate egestas sollicitudin."
                videoThumnail={videoThumnail}
                videohref='https://www.youtube.com/embed/dyZcRRWiuuw?autoplay=1&mute=1'
            />
            <About />
            <Contact 
            noImg ="true"/>
        </div>
    );
}

export default Page;
