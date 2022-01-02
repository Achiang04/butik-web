import Header from 'components/Header';
import React from 'react';

export interface HomeProps {}

const Home = () => {
    return (
        <>
            <Header />
        </>
    );
};

Home.defaultProps = {
    textSizeLabel: 'sm',
    textColorLabel: 'gray-700',
    marginBottomLabel: '1',
    withFormik: false
};

export default React.memo(Home);
