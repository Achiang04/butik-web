import FeaturesCard from 'components/Card/FeaturesCard';
import CarouselComponent from 'components/Carousel/CarouselComponent';
import Footer from 'components/Footer';
import Header from 'components/Header';
import React from 'react';

const featuresData = [
    {
        img: '/img/free_delivery.png',
        title: 'Free Delivery',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'
    },
    {
        img: '/img/cashback.png',
        title: '100% Cash Back',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'
    },
    {
        img: '/img/premium_quality.png',
        title: 'Quality Product',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'
    },
    {
        img: '/img/24_hours_support.png',
        title: '24/7 Support',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'
    }
];

const About = () => {
    return (
        <>
            <Header />

            <div className="flex flex-col items-center pt-24">
                <div className="w-4/6 mt-20">
                    <div className="flex items-center">
                        <img className="w-1/2 h-120 mr-3.5" src="/img/about.png" alt="" />
                        <div className="w-1/2 ml-3.5">
                            <p className="text-textPurple text-4xl font-semibold">
                                Know About Our Ecomerce Business, History
                            </p>
                            <p className="mt-3.5 font-medium text-textSoftGray text-base">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                                neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
                                tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
                                vitae lobortis quis bibendum quam.
                            </p>
                            <button className="py-1.5 px-7 bg-pink text-white rounded mt-32">
                                Contact Us
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col items-center my-32">
                        <p className="text-4xl font-extrabold mb-10">Our Features</p>
                        <FeaturesCard data={featuresData} />
                    </div>
                </div>

                <div className="w-full bg-aboutClientBg flex justify-center mb-32">
                    <div className="w-4/6 flex flex-col items-center my-10 mx-auto">
                        <p className="text-4xl font-extrabold">Our Client Say!</p>
                        <CarouselComponent />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

About.defaultProps = {};

export default React.memo(About);
