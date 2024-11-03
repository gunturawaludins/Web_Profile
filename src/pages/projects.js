import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg';

const FeaturedProject = ({ type, title, summary, img, link }) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='w-full flex flex-col lg:flex-row items-center justify-between relative rounded-br-2xl
            rounded-3xl border border-solid border-dark bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-2xl p-6 md:p-8 lg:p-12'
        >
            <div className='absolute top-0 left-3 -z-10 w-[100%] h-[101%] rounded-[2.5rem] bg-dark rounded-br-3xl' />
            <Link href={link} target="_blank" className='w-full lg:w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <Image src={img} alt={title} className="w-full h-auto" />
                </motion.div>
            </Link>

            <div className='w-full lg:w-1/2 flex flex-col items-start justify-between pl-0 lg:pl-6 mt-6 lg:mt-0'>
                <span className='text-white font-medium text-lg sm:text-xl'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-4'>
                    <h2 className='my-2 w-full text-left text-2xl sm:text-3xl md:text-4xl font-bold text-white'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-white text-sm sm:text-base'>{summary}</p>
                <div className='mt-2 flex items-center justify-start'>
                    <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                        <Link
                            href={link}
                            target="_blank"
                            className='rounded-lg bg-dark text-light p-2 px-4 sm:px-6 text-base sm:text-lg font-semibold hover:bg-white hover:text-dark transition-colors'
                        >
                            Visit Project
                        </Link>
                    </motion.div>
                </div>
            </div>
        </motion.article>
    );
};

const Project = ({ type, title, img, link }) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-gradient-to-r from-indigo-500 to-blue-400 p-4 sm:p-6 relative shadow-xl'
        >
            <div className='absolute top-0 left-3 -z-10 w-[100%] h-[101%] rounded-[2rem] bg-dark rounded-br-3xl' />

            <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
                    <Image src={img} alt={title} className="w-full h-auto" />
                </motion.div>
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-white font-medium text-lg sm:text-xl'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-4'>
                    <h2 className='my-2 w-full text-left text-xl sm:text-2xl font-bold text-white'>{title}</h2>
                </Link>
                <div className='mt-2 flex items-center justify-start'>
                    <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                        <Link
                            href={link}
                            target="_blank"
                            className='text-base sm:text-lg font-semibold text-white underline'
                        >
                            Visit Project
                        </Link>
                    </motion.div>
                </div>
            </div>
        </motion.article>
    );
};

const projects = () => {
    return (
        <>
            <Head>
                <title>Guntur Awaludin || Projects Page</title>
                <meta name="description" content="Explore my projects" />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center text-dark px-4 sm:px-8'>
                <Layout className='pt-8 md:pt-16'>
                    <AnimatedText
                        text="Imagination Trumps Knowledge!"
                        className="mb-12 md:mb-16 text-3xl sm:text-4xl md:text-5xl text-center font-bold italic text-indigo-200 text-glow"
                    />
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12'>
                        <div className='col-span-1 lg:col-span-2'>
                            <FeaturedProject
                                title="Crypto Screener Application"
                                img={project1}
                                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows details regarding almost all cryptocurrencies. Easily convert prices to your local currency."
                                link="/"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-1'>
                            <Project
                                title="Crypto Screener Application"
                                img={project1}
                                link="/"
                                type="Project"
                            />
                        </div>
                        <div className='col-span-1'>
                            <Project
                                title="Crypto Screener Application"
                                img={project1}
                                link="/"
                                type="Project"
                            />
                        </div>
                        <div className='col-span-1 lg:col-span-2'>
                            <FeaturedProject
                                title="Crypto Screener Application"
                                img={project1}
                                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows details regarding almost all cryptocurrencies. Easily convert prices to your local currency."
                                link="/"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-1'>
                            <Project
                                title="Crypto Screener Application"
                                img={project1}
                                link="/"
                                type="Project"
                            />
                        </div>
                        <div className='col-span-1'>
                            <Project
                                title="Crypto Screener Application"
                                img={project1}
                                link="/"
                                type="Project"
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
};

export default projects;
