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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className={`lg:${prop.order ? "order-1" : "order-none"}`}>
                        {ImgCarousel ?
                            <Carousel className='h-[300px] sm:h-[450px]' leftControl=' ' rightControl=' '>
                                {CarouselImges.map((img, index) => (
                                    <div key={index}>
                                        <Image src={img.src} alt={img.alt} />
                                    </div>
                                ))}
                            </Carousel>
                            :
                            <Image src={prop.ImgSrc} alt='' />
                        }
                    </div>
                    <div>
                        <h2 className='text-4xl mb-4 font-bold'>{prop.title}</h2>
                        <p className='text-gray-600 dark:text-gray-300 mb-6'>{prop.text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Imgwithtext;
