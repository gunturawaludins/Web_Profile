// Footer.js
import Link from 'next/link'
import React from 'react'
import Layout from './Layout'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="dark:text-light dark:border-light w-full border-t-2 border-solid border-gray-800 font-medium text-base bg-gray-100">
            <Layout className="py-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-4 md:space-y-0">
                {/* Kiri - Copyright */}
                <span className="text-gray-700 dark:text-light text-sm md:text-base">
                    {new Date().getFullYear()} &copy; All Rights Reserved |{' '}
                    <span className="font-semibold">Guntur Awaludin Saptadi | Researcher</span>
                </span>

                {/* Tengah - Navigation Links */}
                <div className="space-x-4 md:space-x-6 dark:text-light">
                    <Link href="/" className="hover:underline hover:text-blue-600 text-sm md:text-base">
                        Home
                    </Link>
                    <Link href="/about" className="hover:underline hover:text-blue-600 text-sm md:text-base">
                        About
                    </Link>
                    <Link href="mailto:gunturawaludinsptd@gmail.com" className="hover:underline hover:text-blue-600 text-sm md:text-base">
                        Contact
                    </Link>
                </div>

                {/* Kanan - Social Media Icons */}
                <div className="flex space-x-4 md:space-x-6 text-xl md:text-2xl">
                    <Link href="https://github.com/gunturawaludins" target="_blank" className="hover:text-gray-900">
                        <FaGithub />
                    </Link>
                    <Link href="https://www.linkedin.com/in/guntur-awaludin-saptadi/" target="_blank" className="hover:text-blue-700">
                        <FaLinkedin />
                    </Link>
                </div>
            </Layout>
        </footer>
    )
}

export default Footer;
