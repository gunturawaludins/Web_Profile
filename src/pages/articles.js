import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import article1 from "../../public/images/articles/1.jpeg";
import article2 from "../../public/images/articles/3.png";
import article3 from "../../public/images/articles/4.jpeg";
import article4 from "../../public/images/articles/IYS.jpeg";
import article5 from "../../public/images/articles/2.jpg";

// Komponen FeaturedArticle dengan efek hover dan styling lebih menarik
const FeaturedArticle = ({ img, title, time, summary, link }) => {
    return (
        <li className='relative col-span-2 md:col-span-1 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-gray-100 dark:bg-gray-800 dark:shadow-lg'>
            <Link href={link} target="_blank" className='block'>
                <Image
                    src={img}
                    alt={title}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
            </Link>
            <div className="p-4 dark:bg-gray-800">
                <Link href={link} target="_blank">
                    <h2 className='capitalize text-2xl font-bold mb-2 hover:text-blue-500 dark:hover:text-yellow-300 transition-colors text-gray-800 dark:text-gray-100'>
                        {title}
                    </h2>
                </Link>
                <p className='text-sm mb-4 text-gray-600 dark:text-gray-400'>{summary}</p>
                <span className='text-primary font-semibold text-blue-600 dark:text-yellow-400'>{time}</span>
            </div>
        </li>
    );
};

// Komponen Artikel Biasa dengan styling tambahan untuk mode gelap
const Article = ({ img, title, time, link }) => {
    return (
        <li className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800 dark:shadow-lg">
            <Link href={link} target="_blank" className='block'>
                <Image
                    src={img}
                    alt={title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
            </Link>
            <div className="p-4 dark:bg-gray-800">
                <Link href={link} target="_blank">
                    <h2 className='capitalize text-xl font-semibold mb-2 hover:text-blue-500 dark:hover:text-yellow-300 transition-colors text-gray-800 dark:text-gray-100'>
                        {title}
                    </h2>
                </Link>
                <span className='text-primary font-medium text-blue-600 dark:text-yellow-400'>{time}</span>
            </div>
        </li>
    );
};

// Halaman Artikel dengan Layout yang Diperbarui untuk Mode Gelap
const articles = () => {
    return (
        <>
            <Head>
                <title>Guntur Awaludin || Articles</title>
                <meta name="description" content="Collection of articles by Guntur Awaludin" />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300'>
                <Layout className='pt-16'>
                    <AnimatedText
                        text="Words Can Change The World!"
                        className='mb-16 text-center text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white'
                    />

                    {/* Featured Section */}
                    <ul className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'>
                        <FeaturedArticle
                            title="Guntur Awaludin (Mahasiswa FT UNDIP) Raih Best Presenter Award Di Ajang 11th IC3INA 2024"
                            summary="Guntur Awaludin Saptadi, mahasiswa Teknik Elektro Fakultas Teknik UNDIP, berhasil meraih penghargaan Best Presenter Award dalam ajang 11th International Conference on Computer, Control, Informatics and its Applications (IC3INA) 2024, yang diadakan pada 9-10 Oktober di BRIN Bandung."
                            time="5 min read"
                            link="https://www.undip.ac.id/post/39477/guntur-awaludin-mahasiswa-ft-undip-raih-best-presenter-award-di-ajang-11th-ic3ina-2024.html"
                            img={article1}
                        />
                        <FeaturedArticle
                            title="Tim Mahasiswa Teknik Elektro UNDIP Borong 3 Penghargaan Bergengsi World Invention Competition and Exhibition 2024, Malaysia"
                            summary="Tim mahasiswa Teknik Elektro UNDIP, meraih tiga penghargaan di WICE 2024 di Mahsa University, Malaysia, yaitu Indonesia Young Scientist Grand Prize Award, Malaysia MYSO Special Award, dan Gold Medal Award. Memukau juri dengan solusi inovatif untuk optimasi logistik menggunakan AI."
                            time="7 min read"
                            link="https://wargaberita.com/mahasiswa-teknik-elektro-undip-dapat-penghargaan-di-kompetisi-internasional/"
                            img={article2}
                        />
                    </ul>

                    {/* Other Articles Section */}
                    <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                        <Article
                            title="Tim AquaCultiva Raih Dua Penghargaan Internasional dengan Inovasi Revolusioner Bidang Agriculture"
                            time="5 min read"
                            link="https://www.radarsuara.com/berita/1719464354/keren-inovasi-pertanian-milik-tiga-mahasiswa-undip-diakui-secara-internasional#google_vignette"
                            img={article3}
                        />
                        <Article
                            title="Jadi Delegasi Indonesia di Istanbul Youth Summit 2023, Mahasiswa Elektro Raih Best Group Award"
                            time="5 min read"
                            link="https://elektro.ft.undip.ac.id/v3/jadi-delegasi-indonesia-di-istanbul-youth-summit-2023-mahasiswa-elektro-raih-best-group-award/"
                            img={article4}
                        />
                        <Article
                            title="Mahasiswa Teknik Elektro Undip Borong Dua Medali Juara dari Tanoto Student Research Award 2022"
                            time="7 min read"
                            link="https://jateng.tribunnews.com/2022/11/13/mahasiswa-teknik-elektro-undip-borong-dua-medali-juara-dari-tanoto-student-research-award-2022"
                            img={article5}
                        />
                    </ul>
                </Layout>
            </main>
        </>
    );
};

export default articles;
