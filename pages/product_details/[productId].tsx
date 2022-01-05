import CardDetails from 'components/Card/CardDetails';
import Footer from 'components/Footer';
import Header from 'components/Header';
import React from 'react';

export interface ProductDetailsProps {}

const ProductDetails = () => {
    return (
        <>
            <Header />

            <div className="flex flex-col items-center pt-24 mb-20">
                <div className="w-3/4 flex justify-between mt-20">
                    <CardDetails />
                </div>
            </div>

            <Footer />
        </>
    );
};

ProductDetails.defaultProps = {};

export default React.memo(ProductDetails);
