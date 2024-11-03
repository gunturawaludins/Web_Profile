import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profilePic from "../../public/images/profile/vector_guntur_2.png"
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null)

    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>
}

const about = () => {
    return (
        <>
            <Head>
                <title>Guntur Awaludin || About Page</title>
                <meta name="description" content="any description" />
            </Head>

            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Innovation Unleashed!" className='mb-16 lg:!text-6xl md:!text-5xl sm:!text-4xl !text-3xl' />
                    <div className='grid w-full grid-cols-1 lg:grid-cols-8 gap-16'>
                        {/* Biography Section */}
                        <div className='col-span-1 lg:col-span-3 flex flex-col items-start justify-start'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
                            <p className='font-medium'>
                                Hi, I'm Guntur Awaludin, a full-stack developer, machine learning engineer, and passionate researcher with expertise in IoT and AI. I thrive on developing innovative solutions that bridge technology with real-world challenges. With multiple international achievements, I constantly seek new ways to push boundaries and make an impact.
                            </p>
                            <p className='my-4 font-medium'>
                                I believe that technology is a tool for transformation – not just about writing code but solving complex problems and creating seamless, impactful experiences. Every solution I design reflects my dedication to innovation, efficiency, and excellence.
                            </p>
                            <p className='font-medium'>
                                Whether working on smart microgrid systems, building AI-powered applications, or crafting e-commerce platforms, I bring my commitment to creativity, problem-solving, and user-centered development to every project. I look forward to applying my skills and passion to your next challenge.
                            </p>
                        </div>

                        {/* Profile Picture Section */}
                        <div className='col-span-1 lg:col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark dark:border-light dark:bg-dark bg-light p-8'>
                            <div className='absolute top-0 left-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                            <Image
                                src={profilePic}
                                alt="Guntur Awaludin"
                                className='w-full h-auto rounded-2xl'
                                priority={true}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                            />
                        </div>

                        {/* Stats Section */}
                        {/* Stats Section */}
<div className='col-span-1 lg:col-span-2 flex flex-col items-center lg:items-end justify-between'>
    <div className='flex flex-col items-center lg:items-end justify-center mb-8 md:mb-4'>
        <span className='inline-block text-5xl md:text-6xl lg:text-7xl font-bold'>
            <AnimatedNumbers value={50} />+
        </span>
        <h2 className='dark:text-light/75 text-lg md:text-xl font-medium capitalize text-dark/75 text-center lg:text-right'>International & National Achievements</h2>
    </div>
    <div className='flex flex-col items-center lg:items-end justify-center mb-8 md:mb-4'>
        <span className='inline-block text-5xl md:text-6xl lg:text-7xl font-bold'>
            <AnimatedNumbers value={3} />+
        </span>
        <h2 className='dark:text-light/75 text-lg md:text-xl font-medium capitalize text-dark/75 text-center lg:text-right'>International Conferences Presented</h2>
    </div>
    <div className='flex flex-col items-center lg:items-end justify-center'>
        <span className='inline-block text-5xl md:text-6xl lg:text-7xl font-bold'>
            <AnimatedNumbers value={1} /> Year
        </span>
        <h2 className='dark:text-light/75 text-lg md:text-xl font-medium capitalize text-dark/75 text-center lg:text-right'>Work Experience</h2>
    </div>
</div>

                    </div>

                    {/* Additional Sections */}
                    <Skills />
                    <Experience />
                    <Education />
                </Layout>
            </main>
        </>
    );
};

export default about;
