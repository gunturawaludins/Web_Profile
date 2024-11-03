// Logo.js
import { motion } from 'framer-motion';
import Link from 'next/link';

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-4">
      <MotionLink
        href="/"
        className="
          text-5xl font-extrabold italic tracking-widest
          bg-clip-text text-transparent bg-dark dark:border-light
          bg-gradient-to-r from-purple-400 via-pink-500 to-red-500
        "
        whileHover={{
          scale: 1.1, // Slight zoom effect
          textShadow: [
            "0px 0px 8px rgba(255, 255, 255, 0.8)", 
            "0px 0px 16px rgba(252,176,69,0.8)"
          ],
          transition: {
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse"
          }
        }}
        whileTap={{ scale: 0.95 }}
      >
        GUNZ
      </MotionLink>
    </div>
  );
};

export default Logo;
