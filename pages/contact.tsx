import Footer from 'components/Footer';
import Header from 'components/Header';
import React from 'react';

export interface ContactProps {}

const Contact = () => {
    return (
        <>
            <Header />

            <div className="flex justify-center pt-24">
                <p>Contact</p>
            </div>

            <Footer />
        </>
    );
};

Contact.defaultProps = {};

export default React.memo(Contact);
