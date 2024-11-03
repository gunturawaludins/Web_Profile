import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Logo from './Logo';
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from './Icons';
import { motion } from 'framer-motion';
import useThemeSwitcher from './hooks/useThemeSwitcher';

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();

    return (
        <Link href={href} className={`${className} relative group`} onClick={() => router.push(href)}>
            {title}
            <span
                className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 
                            group-hover:w-full transition-[width] ease duration-300 
                            dark:bg-light ${router.asPath === href ? 'w-full' : 'w-0'}`}
            >
                &nbsp;
            </span>
        </Link>
    );
};

const NavBar = () => {
    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="w-full px-4 py-4 md:px-16 md:py-6 lg:px-32 lg:py-8 font-medium flex items-center justify-between dark:text-light relative z-10">
            <button 
                className="lg:hidden flex flex-col justify-center items-center" 
                onClick={handleClick} 
                aria-label="Toggle menu"
            >
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm transform ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} />
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm transform ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} />
            </button>

            <div className="hidden lg:flex justify-between items-center w-full">
                <nav className="flex space-x-4">
                    <CustomLink href="/" title="Home" />
                    <CustomLink href="/about" title="About" />
                    <CustomLink href="/projects" title="Projects" />
                    <CustomLink href="/achievements" title="Achievements" />
                    <CustomLink href="/articles" title="Articles" />
                </nav>

                <nav className="flex items-center">
                    <motion.a href="https://github.com/gunturawaludins" target="_blank"
                        whileHover={{ y: -2 }}
                        className="w-6 mx-3"
                        whileTap={{ scale: 0.9 }}
                        aria-label="GitHub profile"
                    >
                        <GithubIcon />
                    </motion.a>
                    <motion.a href="https://www.linkedin.com/in/guntur-awaludin-saptadi/" target="_blank"
                        whileHover={{ y: -2 }}
                        className="w-6 ml-3"
                        whileTap={{ scale: 0.9 }}
                        aria-label="LinkedIn profile"
                    >
                        <LinkedInIcon />
                    </motion.a>

                    <button
                        onClick={() => setMode(mode === "light" ? "dark" : "light")}
                        className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                        aria-label="Toggle theme"
                    >
                        {mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />}
                    </button>
                </nav>
            </div>

            {isOpen && (
                <div className={`fixed inset-0 ${mode === "light" ? "bg-white" : "bg-black bg-opacity-70"} backdrop-blur-sm flex flex-col items-center justify-center z-50`}>
                    {/* Tombol Close */}
                    <button 
                        onClick={handleClick} 
                        className={`absolute top-4 right-4 text-4xl ${mode === "light" ? "text-dark" : "text-light"}`}
                        aria-label="Close menu"
                    >
                        &times; {/* Simbol "X" besar */}
                    </button>

                    <nav className="flex flex-col items-center space-y-4">
                        <CustomLink href="/" title="Home" className={`text-2xl ${mode === "light" ? "text-dark" : "text-light"}`} />
                        <CustomLink href="/about" title="About" className={`text-2xl ${mode === "light" ? "text-dark" : "text-light"}`} />
                        <CustomLink href="/projects" title="Projects" className={`text-2xl ${mode === "light" ? "text-dark" : "text-light"}`} />
                        <CustomLink href="/achievements" title="Achievements" className={`text-2xl ${mode === "light" ? "text-dark" : "text-light"}`} />
                        <CustomLink href="/articles" title="Articles" className={`text-2xl ${mode === "light" ? "text-dark" : "text-light"}`} />
                    </nav>

                    <nav className="flex items-center justify-center mt-8">
                        <motion.a href="https://github.com/gunturawaludins" target="_blank"
                            whileHover={{ y: -2 }}
                            className="w-6 mx-3"
                            whileTap={{ scale: 0.9 }}
                            aria-label="GitHub profile"
                        >
                            <GithubIcon />
                        </motion.a>
                        <motion.a href="https://www.linkedin.com/in/guntur-awaludin-saptadi/" target="_blank"
                            whileHover={{ y: -2 }}
                            className="w-6 ml-3"
                            whileTap={{ scale: 0.9 }}
                            aria-label="LinkedIn profile"
                        >
                            <LinkedInIcon />
                        </motion.a>

                        <button
                            onClick={() => setMode(mode === "light" ? "dark" : "light")}
                            className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                            aria-label="Toggle theme"
                        >
                            {mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />}
                        </button>
                    </nav>
                </div>
            )}

            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    );
};

export default NavBar;
