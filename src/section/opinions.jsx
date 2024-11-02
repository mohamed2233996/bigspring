import { Carousel } from 'flowbite-react';
import React from 'react';
import opinion1 from "@/imges/op1.webp"
import opinion2 from "@/imges/op2.webp"
import Image from 'next/image';
import opinions from '@/data/opinionsData';

const Opinions = () => {
    return (
        <section className='section bg-themeLight dark:bg-themeDark py-20 transition-all'>
            <div className="container m-auto">
                <div className="flex items-center flex-col">
                    <div className="lg:w-1/2 text-center">
                        <h2 className='text-3xl mb-4 font-bold'>Trusted by those you trust</h2>
                        <p className='text-gray-600 dark:text-gray-300 mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas Werat viverra id et aliquet. vulputate egestas sollicitudin.</p>
                    </div>
                    <Carousel className='h-[450px]' leftControl=' ' rightControl=' '>
                        {opinions?.map((opinion) => {
                            return (
                                <div key={opinion.id} className='flex items-center flex-col gap-10'>
                                    <p className='text-xl w-1/2 text-center font-bold'>{opinion.comment}</p>
                                    <div className='flex flex-col items-center gap-2'>
                                        <Image className='rounded-full' src={opinion.img} alt={opinion.name} />
                                        <h2 className='font-bold text-xl mt-4'>{opinion.name}</h2>
                                        <p className='text-gray-600 dark:text-gray-300'>{opinion.location}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </Carousel>
                </div>
            </div>
        </section>
    );
}

export default Opinions;
