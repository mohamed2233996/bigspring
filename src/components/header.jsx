"use client";

import { Dropdown, Navbar } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import logo from "@/imges/logo.jpg"
import logoDark from "@/imges/logo-darkmode.webp"
import links from "@/data/navData"

import Image from 'next/image';

const Header = () => {

    const [theme, setTheme] = useState(
        'light'
    )
    const [menuopened, setMenuopened] = useState(false)

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleTheme = () => {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setTheme('light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setTheme('dark');
        }
    }

    const toggleMenu = () => {
        setMenuopened(!menuopened)
    }

    return (
        <div className ="sticky z-50 top-0">
            <Navbar fluid rounded>
                <Navbar.Brand href="">
                    <Image src={
                        theme === 'dark' ? logoDark : logo
                    } width={180} className="mr-3 sm:h-9" alt="Logo" />
                </Navbar.Brand>
                <div className="flex lg:order-2 space-x-3 lg:space-x-0 gap-3">
                    <button
                        type="button"
                        className="text-white bg-primary hover:bg-primaryH  rounded-2xl text-sm px-4 py-2 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primaryH">
                        Get Demo
                    </button>
                    <button
                        type="button"
                        className="text-black dark:text-white" onClick={toggleTheme}>
                        {theme === 'dark' ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={28} height={28} fill={"none"}>
                                <path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M11.9955 3H12.0045M11.9961 21H12.0051M18.3588 5.63599H18.3678M5.63409 18.364H5.64307M5.63409 5.63647H5.64307M18.3582 18.3645H18.3672M20.991 12.0006H21M3 12.0006H3.00898" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={28} height={28} fill={"none"}>
                                <path d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        )}
                    </button>
                    <button
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-sticky"
                        aria-expanded="false"
                        onClick={toggleMenu}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className={`${menuopened ? "" : "hidden"} items-center justify-between w-full lg:flex lg:w-auto lg:order-1`}
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col items-center gap-2 p-4 lg:p-0 mt-4 lg:space-x-8 lg:flex-row lg:mt-0 navLink">
                        {links?.map((link) => {
                            if (link.subLinks) {
                                return (
                                    <li key={link.key}>
                                        <Dropdown label={link.text} inline dismissOnClick={false}>
                                            {link.subLinks.map((subLink, key) => (
                                                <Dropdown.Item key={key} href={subLink.href}>
                                                    {subLink.label.text ? (
                                                        <div className='flex flex-row items-center justify-center gap-2'>
                                                            <span>
                                                                {subLink.label?.svg}
                                                            </span>
                                                            <div>
                                                                <span>{subLink.label.text}</span>
                                                                <p className="text-xs text-gray-500 dark:text-gray-400">{subLink.label.p}</p>
                                                            </div>
                                                        </div>) : (
                                                        subLink.label
                                                    )}
                                                </Dropdown.Item>
                                            ))}
                                        </Dropdown>
                                    </li>
                                )
                            } else {
                                return (
                                    <li key={link.key}>
                                        <a
                                            href={link.href}
                                            className="block"
                                        >
                                            {link.text}
                                        </a>
                                    </li>
                                )
                            }

                        })}
                    </ul>

                </div>
            </Navbar>
        </div>
    );
}

export default Header;
