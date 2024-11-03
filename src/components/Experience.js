import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"
import Lilcon from './Lilcon'

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <Lilcon reference={ref} />
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
        >
            <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;<a href={companyLink}
                target='_blank'
                className='text-primary dark:text-primaryDark capitalize'
            >@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75'>
                {time} | {address}
            </span>
            <p className='font-medium w-full'>
                {work}
            </p>
        </motion.div>
    </li>
}
const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center'>
                Experience
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative'>

                <motion.div
                    style={{ scaleY: scrollYProgress }}

                    className='dark:bg-light dark:text-dark absolute left-9 top-0 w-[4px] h-full bg-dark origin-top' />
                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    <Details
                        position="Research Innovation Management" company="PT Telkom Indonesia"
                        companyLink="https://www.telkom.co.id/sites"
                        time="July 2023- July 2024" address="Jl Gegerkalong Hilir No 47, Bandung, Jawa Barat, ID"
                        work="As an Innovation Management Officer at Telkom Indonesia, I managed multiple startup projects within the company’s ecosystem, overseeing development, budget allocation, and execution. I conducted market research to identify trends and customer needs, contributing to effective business strategies. I also developed strategic plans to align startup growth with company goals. Serving as a Data Scientist on a GPT project, I applied data analytics and machine learning to enhance workforce performance. This role strengthened my project management skills and provided valuable experience in data science and innovation management within a fast-evolving technology landscape."
                    />
                    <Details
                        position="Backend Developer" company="PT Telkom Indonesia"
                        companyLink="https://www.telkom.co.id/sites"
                        time="December 2022- May 2023" address="Jl. Japati No.1, Bandung, Jawa Barat, ID"
                        work="As a Backend Developer at HCIS PT Telkom Indonesia, my responsibilities included enhancing API routing with Express.JS, reducing response time by 15 ms. I implemented JWT for authentication, decreasing 90% of fraudulent attempts, and migrated the LaporAja application from .NET to Express.JS, improving response speed by 35%. I also contributed to enhancing backend efficiency to support the company’s digital initiatives."
                    />
                </ul>
            </div>
        </div>
    )
}

export default Experience