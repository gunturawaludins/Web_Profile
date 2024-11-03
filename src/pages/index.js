import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout'; // Import Layout component
import AnimatedText from '@/components/AnimatedText';
import Image from 'next/image';
import { motion } from 'framer-motion'; // Framer Motion for animations
import profilePic from '../../Public/images/profile/vector_guntur_1-removebg.png';
import { LinkArrow } from '@/components/Icons';
import HireMe from '@/components/HireMe';
import lightBulb from '../../Public/images/svgs/miscellaneous_icons_1.svg';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Tentukan breakpoint untuk mode mobile
    };

    handleResize(); // Cek ukuran layar saat pertama kali dimuat
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Guntur Awaludin || Home Page</title>
        <meta name="description" content="Portfolio of Guntur Awaludin" />
      </Head>

      <main className="flex flex-col lg:flex-row items-center justify-center text-white min-h-screen dark:text-light 2xl:flex-row-reverse xl:px-16 lg:py-12 md:px-8 sm:px-4">
        <Layout className="pt-0 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8">
            {/* Profile Picture */}
            <motion.div
              className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={profilePic}
                alt="Guntur Awaludin"
                className="w-full h-auto rounded-lg"
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </motion.div>

            {/* Introduction Text */}
            <motion.div
              className="w-full lg:w-1/2 space-y-6 flex flex-col items-center lg:items-start self-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <AnimatedText text="Advancing Innovation Through Research and Technology." className='!text-4xl sm:!text-5xl md:!text-6xl lg:!text-7xl !text-left' />
              <p className="text-sm sm:text-base my-4 font-medium text-gray-600 dark:text-light">
                An accomplished researcher, full-stack developer, and machine learning engineer, with expertise in IoT. With numerous achievements at the international level, I thrive on turning complex ideas into innovative solutions that make an impact.
              </p>
              <div className='flex flex-wrap items-center self-center lg:self-start mt-2'>
                <Link href="/CV GUNTUR_NEW.pdf" target="_blank"
                  className='flex items-center bg-dark text-light p-2 px-4 sm:px-6 rounded-lg text-base sm:text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light mb-4 lg:mb-0'
                  download={true}
                >
                  Resume <LinkArrow className={"w-4 sm:w-6 ml-1"} />
                </Link>
                <Link href="mailto:gunturawaludinsptd@gmail.com" target="_blank"
                  className="ml-4 text-base sm:text-lg font-medium capitalize text-dark underline dark:text-light mb-4 lg:mb-0"
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          </div>
        </Layout>

        {/* Hire Me Button */}
        <div className={isMobile ? "absolute z-50" : ""}>
          <HireMe />
        </div>

        {/* Light Bulb Icon - Hanya muncul di desktop */}
        {!isMobile && (
          <div className='absolute right-4 sm:right-8 bottom-4 sm:bottom-8 inline-block w-16 sm:w-24'>
            <Image src={lightBulb} alt="Light Bulb" className='w-full h-auto' />
          </div>
        )}
      </main>
    </>
  );
}
