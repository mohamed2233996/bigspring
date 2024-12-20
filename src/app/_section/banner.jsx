"use client"
import React from 'react';
import bannerImg from "@/imges/banner.svg"
import Image from 'next/image';
import img1 from '@/imges/1.webp'
import img2 from '@/imges/2.webp'
import img3 from '@/imges/3.webp'
import img4 from '@/imges/4.webp'
import img5 from '@/imges/5.webp'
import img6 from '@/imges/6.webp'

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay} from 'swiper/modules';




const Banner = () => {

    const carouselImgs = [
        {
            img: img1,
            alt: 'img1'
        },
        {
            img: img2,
            alt: 'img2'
        },
        {
            img: img3,
            alt: 'img3'
        },
        {
            img: img4,
            alt: 'img4'
        },
        {
            img: img5,
            alt: 'img5'
        },
        {
            img: img6,
            alt: 'img6'
        }
    ]


    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
    };


    return (
        <div data-aos="zoom-in" className='py-20 transition-all'>
            <div className="container m-auto flex items-center flex-col">
                <h1 className="text-4xl text-center font-bold mb-4">Let us solve your critical website development challenges</h1>
                <p className="text-sm text-gray-500 dark:text-gray-300 text-center mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil enim maxime corporis cumque
                    totam aliquid nam sint inventore optio modi neque laborum officiis necessitatibus</p>
                <Image src={bannerImg} width={750} height={395} alt='bannerImg' />
                <p className='my-4 text-lg font-bold '>Let us solve your critical website development challenges</p>
                <div className='mt-16'>
                    {/* <Swiper
                        slidesPerView={"auto"}
                        autoplay={{
                            delay: 2500,
                            speed: 1000,
                            disableOnInteraction: false,
                            loop: true
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 50,
                            },
                        }}
                        className="mySwiper"
                        modules={[Autoplay]}
                    >
                        {carouselImgs.map((img, index) => (
                            <SwiperSlide>
                                <Image key={index} src={img.img} width={250} height={150} alt={img.alt} />
                            </SwiperSlide>
                        ))}
                    </Swiper> */}
                </div>

            </div>
        </div>
    );
}

export default Banner;
