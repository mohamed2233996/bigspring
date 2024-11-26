"use client";
import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import React from 'react';

const Imgwithtext = (prop) => {
    const ImgCarousel = prop.ImgCarousel
    const CarouselImges = prop.CarouselImges


    return (
        <div className={`py-24 ${prop.bg}`}>
            <div className="container m-auto">
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${prop.bigGap? 'gap-16' :'gap-8'}  ${prop.itemsStart? 'items-start' :'items-center'}`}>
                    <div data-aos="fade-right" className={`lg:${prop.order ? "order-1" : "order-none"} rounded-md overflow-hidden`}>
                        {ImgCarousel ?
                            <Carousel className='h-[300px] sm:h-[450px]' leftControl=' ' rightControl=' '>
                                {CarouselImges.map((img, index) => (
                                    <div key={index}>
                                        <Image src={img.src} alt={img.alt} />
                                    </div>
                                ))}
                            </Carousel>
                            :
                            <Image src={prop.ImgSrc} className='w-full' alt='' />
                        }
                    </div>
                    <div data-aos="fade-left" className={prop.textEnd? "lg:text-end" :""}>
                        <h2 className={`text-4xl mb-4 font-bold`}>{prop.title}</h2>
                        <p className='text-gray-600 dark:text-gray-300 mb-10'>{prop.text}</p>
                        {prop.btn?
                        <a href={prop.btnLink} className={`px-8 py-4 rounded-full text-primary bg-transparent border border-primary font-bold hover:bg-primary hover:text-white transition-all`}>
                            {prop.btnText}
                        </a>
                        :''
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Imgwithtext;
