"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
const Videomation = (prop) => {


    const [isplay, setIsplay] = useState(false)


    useEffect(() => {

        const videoBtn = document.getElementById('video-btn-play');
        const videoThumnail = document.getElementById('video-thumnail');
        const videoImg = document.getElementById('video-img');
        videoBtn.addEventListener("click", () => {
            setIsplay(true);

        }
        );
    }, []);

    return (
        <section className='section py-20'>
            <div className="container m-auto">
                <div className="flex flex-col items-center">
                    <h2 className='text-3xl mb-4 font-bold'>{prop.headingText}</h2>
                    <p className='text-gray-500 mb-6'>{prop.pText}</p>
                    <div id='video-thumnail' className="relative lg:w-[60rem] mt-4 rounded-md overflow-hidden">
                        <Image src={prop.videoThumnail} className='w-full video-img' alt="videoThumnail" />
                        <button type='button' id='video-btn-play'
                            className="transition-all duration-300 playBtn absolute bottom-0 left-0 w-full h-full opacity-75 flex items-center justify-center">
                            <span className='py-4 px-10 flex items-center justify-center bg-primary rounded-xl text-white transition-all duration-300'>
                                <svg xmlns="http://www.w3.org/2000/svg" className='transition-all duration-300' viewBox="0 0 24 24" width={45} height={45} fill={"none"}>
                                    <path d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </button>
                        {isplay && (
                            <iframe src={prop.videohref}
                                title="YouTube video player"
                                className="absolute bottom-0 left-0 w-full h-full z-20"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                frameborder="0">
                            </iframe>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Videomation;
