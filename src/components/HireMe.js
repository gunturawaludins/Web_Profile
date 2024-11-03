import React from 'react';
import { CircularText } from './Icons'; // Pastikan CircularText diimpor dengan benar
import Link from 'next/link';

const HireMe = () => {
    return (
        <div className="fixed left-4 bottom-4 md:left-8 md:bottom-8 lg:left-12 lg:bottom-12 z-50">
            <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 flex items-center justify-center relative">
                <CircularText className="animate-spin-slow fill-dark dark:fill-light" />

                <Link href="mailto:gunturawaludinsptd@gmail.com" className='flex items-center justify-center
                absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark 
                text-light shadow-md border border-solid border-dark w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full
                font-semibold text-sm md:text-base lg:text-lg hover:bg-light hover:text-dark
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                hover:dark:border-light
                '>
                    Hire Me
                </Link>
            </div>
        </div>
    );
};

export default HireMe;
