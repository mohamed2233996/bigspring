import "./globals.css";
import Header from "@/components/header";
import { Oxygen } from 'next/font/google'
import MyFooter from "../section/MyFooter";

const oxygen = Oxygen({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
  variable: '--font-oxygen',
  href: 'https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap',
})

export const metadata = {
  title: "Bigspring App",
  description: "bigspring By Mohamed Gamal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${oxygen.className} dark:bg-gray-800 dark:text-white antialiased transition-all`}>
        <Header />
        {children}
        <MyFooter />
      </body>
    </html>
  );
}
