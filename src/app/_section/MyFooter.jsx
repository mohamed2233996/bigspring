"use client";

import React, { useEffect, useState } from 'react';

import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import logo from "@/imges/logo.jpg"
import logoDark from "@/imges/logo-darkmode.webp"
import Image from 'next/image';

const MyFooter = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
        } else {
            localStorage.setItem('theme', 'light');
            setTheme('light');
        }
    }, [])

    return (
        <Footer data-aos="fade-up" className='bg-themeLight dark:bg-themeDark py-20' container >
            <div className="w-full">
                <div className="grid grid-cols-1 items-center w-full justify-between md:grid-cols-4">
                    <div className="grid grid-cols-2 md:col-span-3 gap-8 sm:mt-4 sm:grid-cols-3 mb-6 md:mb-0 sm:gap-6">
                        <div>
                            <Footer.Title className='text-xl' title="Company" />
                            <Footer.LinkGroup col>
                                <Footer.Link className='text-gray-600 dark:text-gray-300' href="/About">About</Footer.Link>
                                <Footer.Link className='text-gray-600 dark:text-gray-300' href="/Team">Team</Footer.Link>
                                <Footer.Link className='text-gray-600 dark:text-gray-300' href="/How">How It Works</Footer.Link>
                                <Footer.Link className='text-gray-600 dark:text-gray-300' href="/career">career</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title className='text-xl' title="Product" />
                            <Footer.LinkGroup col>
                                <Footer.Link className='text-gray-600 dark:text-gray-300' href="/CRM">CRM</Footer.Link>
                                <Footer.Link className='text-gray-600 dark:text-gray-300' href="/Help">Help Desk</Footer.Link>
                                <Footer.Link className='text-gray-600 dark:text-gray-300' href="/Workplace">Workplace</Footer.Link>
                                <Footer.Link className='text-gray-600 dark:text-gray-300' href="/Analytics">Analytics</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title className='text-xl' title="Support" />
                            <Footer.LinkGroup col>
                                <Footer.Link className='text-gray-600 dark:text-gray-300' href="/FAQ">FAQ</Footer.Link>
                                <Footer.Link className='text-gray-600 dark:text-gray-300' href="/Contact">Contact</Footer.Link>
                                <Footer.Link className='text-gray-600 dark:text-gray-300' href="/Privacy">Privacy Policy</Footer.Link>
                                <Footer.Link className='text-gray-600 dark:text-gray-300' href="/Terms">Terms Conditions</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                    <div>
                        <Image src={
                            theme === 'dark' ? logoDark : logo
                        } width={180} className="mb-4 sm:h-9" alt="Logo" />
                        <p className='text-gray-600 dark:text-gray-300 mb-6'>Lorem ipsum dolor sit amet, consectetur elit. Consjat tristique eget amet tempus eu at cttur</p>
                        <div className="mt-4 flex space-x-6 sm:mt-0">
                            <Footer.Icon href="#" icon={BsFacebook} />
                            <Footer.Icon href="#" icon={BsInstagram} />
                            <Footer.Icon href="#" icon={BsTwitter} />
                            <Footer.Icon href="#" icon={BsGithub} />
                            <Footer.Icon href="#" icon={BsDribbble} />
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href="#" by="bigspring" year={2024} />
                </div>
            </div>
        </Footer>
    );
}
export default MyFooter;
