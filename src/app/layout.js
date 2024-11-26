'use client'
import "./globals.css";
import Header from "@/components/header";
import { Oxygen } from 'next/font/google'
import MyFooter from "./_section/MyFooter";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const oxygen = Oxygen({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
  variable: '--font-oxygen',
  href: 'https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap',
})


export default function RootLayout({ children }) {

  useEffect(() => {
    AOS.init({
      duration: 1000, // مدة الأنيميشن بالميلي ثانية
      easing: 'ease-in-out', // تأثير الإنتقال
      once: false, // تشغيل الأنيميشن مرة واحدة فقط
    });
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Bigspring App</title>
        <meta name="description" content="bigspring By Mohamed Gamal" />
      </head>
      <body className={`${oxygen.className} overflow-x-hidden dark:bg-gray-800 dark:text-white antialiased transition-all`}>
        <Header />
        {children}
        <MyFooter />
      </body>
    </html>
  );
}
