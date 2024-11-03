import React from 'react';
import { motion } from 'framer-motion';

const Skill = ({ name, x, y }) => {
    return (
        <motion.div
            className='dark:bg-light dark:text-dark flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer'
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, x: 0, y: 0 }}
            whileInView={{ opacity: 1, x: x, y: y }}
            transition={{ duration: 1.5 }}
            style={{ position: 'absolute' }}
        >
            {name}
        </motion.div>
    );
};

const Skills = () => {
    return (
        <>
            <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark'>

                <motion.div
                    className='dark:bg-light dark:text-dark flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer'
                    whileHover={{ scale: 1.05 }}
                >
                    Full-Stack
                </motion.div>

                <Skill name="Python" x="-25vw" y="-12vw" />
                <Skill name="SQL" x="-5vw" y="-11vw" />
                <Skill name="Java" x="23vw" y="7vw" />
                <Skill name="Azure" x="0vw" y="11vw" />
                <Skill name="TensorFlow" x="17vw" y="-12vw" />
                <Skill name="IoT" x="32vw" y="-5vw" />
                <Skill name="Agile & Scrum" x="0vw" y="-19vw" />
                <Skill name="PyTorch" x="-23vw" y="13vw" />

            </div>
        </>
    );
};

export default Skills;