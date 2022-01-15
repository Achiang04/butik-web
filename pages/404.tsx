import Footer from 'components/Footer';
import Header from 'components/Header';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <>
            <Head>
                <title>Butik</title>
            </Head>

            <Header />

            <div className="flex flex-col items-center pt-20">
                <img className="w-1/2 h-160" src="/img/404.png" alt="" />
                <Link href="/home">
                    <div className="cursor-pointer py-2 px-8 bg-pink text-white rounded mb-10">
                        <p>Back To Home</p>
                    </div>
                </Link>
            </div>

            <Footer />
        </>
    );
};

NotFound.defaultProps = {};

export default React.memo(NotFound);
