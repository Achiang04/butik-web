import Footer from 'components/Footer';
import Header from 'components/Header';
import React from 'react';

export interface HomeProps {}

const Home = () => {
    return (
        <>
            <Header />

            <div className="flex justify-center pt-24">
                <p>HOME</p>
            </div>

            <Footer />
        </>
    );
};

Home.defaultProps = {};

export default React.memo(Home);
