import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import '@/styles/globals.css';
import { Montserrat } from 'next/font/google';
import Head from 'next/head';
import '@/styles/globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont', // Mendefinisikan font sebagai variabel CSS
});

export default function App({ Component, pageProps }) {
  return (
    <>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </head>
    <main className={`${montserrat.variable} font-mont bg-light w-full dark:bg-dark min-h-screen`}>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </main></>
  )
};
