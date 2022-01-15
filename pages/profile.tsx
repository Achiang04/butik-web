import Footer from 'components/Footer';
import Header from 'components/Header';
import Head from 'next/head';
import React from 'react';

export interface ProfileProps {}

const Profile = () => {
    return (
        <>
            <Head>
                <title>Butik</title>
            </Head>

            <Header />

            <div className="flex justify-center pt-24">
                <p>profile</p>
            </div>

            <Footer />
        </>
    );
};

Profile.defaultProps = {};

export default React.memo(Profile);
