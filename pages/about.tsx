import Footer from 'components/Footer';
import Header from 'components/Header';
import React from 'react';

export interface AboutProps {}

const About = () => {
    return (
        <>
            <Header />

            <div className="flex justify-center pt-24">
                <p>About</p>
            </div>

            <Footer />
        </>
    );
};

About.defaultProps = {};

export default React.memo(About);
