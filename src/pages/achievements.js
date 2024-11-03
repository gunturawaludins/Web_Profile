import React from 'react';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import { FaMedal, FaTrophy, FaAward } from 'react-icons/fa';
import Image from 'next/image';

// Import semua gambar dari folder 'articles'
import achieve1 from '../../public/images/articles/1.jpeg';
import achieve2 from '../../public/images/articles/2.jpg';
import achieve3 from '../../public/images/articles/3.png';
import achieve4 from '../../public/images/articles/4.jpeg';
import achieve5 from '../../public/images/articles/5.jpeg';
import achieve6 from '../../public/images/articles/6.jpg';
import achieve7 from '../../public/images/articles/7.png';
import achieve8 from '../../public/images/articles/9.png';

// Array gambar untuk carousel
const images = [
    achieve1, achieve2, achieve3, achieve4, achieve5, achieve6, achieve7, achieve8
];

// Komponen Carousel
const ContinuousCarousel = () => (
    <div className="carousel-container overflow-hidden relative">
        <div className="carousel-track flex animate-scroll">
            {images.map((img, index) => (
                <div key={index} className="carousel-item flex-shrink-0 w-[300px] p-2">
                    <Image
                        src={img}
                        alt={`Achievement ${index + 1}`}
                        className="rounded-lg shadow-lg w-full object-cover h-[300px]"
                        priority={true}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            ))}
        </div>
    </div>
);

// CSS untuk animasi
const style = `
.carousel-container {
    width: 100%;
    height: 300px;
    position: relative;
    overflow: hidden;
}
.carousel-track {
    display: flex;
    animation: scroll 50s linear infinite;
}
@keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
}
`;

// Data prestasi: 14 penghargaan
const achievementsData = [
    { title: 'Best Presenter at IC3INA Conference organized by BRIN', year: 'Oct 2024', icon: <FaTrophy /> },
    { title: 'Gold Medal Award at World Invention Competition Exhibition', year: 'Sep 2024', icon: <FaMedal /> },
    { title: 'Malaysia Young Scientist Organization Special Award', year: 'Sep 2024', icon: <FaAward /> },
    { title: 'IYSA Grand Prize Award at World Invention Competition Exhibition', year: 'Sep 2024', icon: <FaAward /> },
    { title: 'Best Young Inventor Champion Excellence Award at World Young Inventor Exhibition', year: 'May 2024', icon: <FaMedal /> },
    { title: 'Gold Medalist at World Young Inventors Exhibition (WYIE), ITEX', year: 'May 2024', icon: <FaTrophy /> },
    { title: 'Top 5 Outstanding Student from Faculty of Engineering', year: 'May 2023', icon: <FaTrophy /> },
    { title: 'The Most Outstanding Student from Electrical Engineering Department 2023', year: 'Apr 2023', icon: <FaMedal /> },
    { title: 'Best Project Award at Shell NXplorers Competition by Shell Indonesia', year: 'Apr 2023', icon: <FaTrophy /> },
    { title: 'Best Project at Industry, Innovation, and Infrastructure Category at IYS', year: 'Feb 2023', icon: <FaAward /> },
    { title: 'Indonesia Delegate for International Conference at IYS 2023, Istanbul Turkiye', year: 'Jan 2023', icon: <FaAward /> },
    { title: 'Silver Medalist at IIIEX Competition at POLINES, Semarang', year: 'Nov 2022', icon: <FaMedal /> },
    { title: 'Silver Medalist at Tanoto Student Research Award by ITB', year: 'Oct 2022', icon: <FaMedal /> },
    { title: 'Fully Funded Research Project at Shell NXplorers Competition by Shell Indonesia', year: 'Jul 2022', icon: <FaAward /> },
];

// Komponen Card Prestasi
const AchievementCard = ({ title, year, icon }) => (
    <div className="group flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
        <div className="p-4 bg-gray-100 rounded-full text-4xl">{icon}</div>
        <div>
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-500 transition-colors">{title}</h3>
            <span className="block text-sm text-gray-500 mt-1">{year}</span>
        </div>
    </div>
);

// Komponen Utama Achievements
const Achievements = () => {
    return (
        <>
            <Head>
                <title>Guntur Awaludin || Awards & Achievements</title>
                <meta name="description" content="Achievements and awards by Guntur Awaludin" />
                <style>{style}</style>
            </Head>
            <main className="w-full mb-16 flex flex-col items-center justify-center bg-gray-50">
                <Layout className="pt-16">
                    <ContinuousCarousel />  {/* Carousel */}
                    <AnimatedText
                        text="Awards & Achievements"
                        className="mt-16 mb-12 text-center text-4xl md:text-5xl font-extrabold"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-16">
                        {achievementsData.map((achievement, index) => (
                            <AchievementCard
                                key={index}
                                title={achievement.title}
                                year={achievement.year}
                                icon={achievement.icon}
                            />
                        ))}
                    </div>
                </Layout>
            </main>
        </>
    );
};

// Ekspor Default Komponen Achievements
export default Achievements;
