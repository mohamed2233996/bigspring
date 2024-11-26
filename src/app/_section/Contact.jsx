import React from 'react';
import announcement from '@/imges/announcement.svg';
import Image from 'next/image';

const Contact = (props) => {
    return (
         <section data-aos="fade-up"  className='section py-20 transition-all'>
            {props.noImg? "":
            <Image src={announcement} className='m-auto w-full' alt="announcement" />
            }
            
            <div className="container m-auto pt-20">
                <div className="flex flex-col items-center">
                    <h2 className='text-4xl mb-6 font-bold'>Ready to get started?</h2>
                    <p className='text-gray-600 dark:text-gray-300 mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat eget amtempus eu at consecttur.</p>
                    <button
                        type="button"
                        className="text-white bg-primary hover:bg-primaryH  rounded-3xl text-lg px-4 py-2 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primaryH">
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Contact;
