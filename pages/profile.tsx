import Footer from 'components/Footer';
import Header from 'components/Header';
import React from 'react';

export interface ProfileProps {}

const Profile = () => {
    return (
        <>
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
