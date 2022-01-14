import Footer from 'components/Footer';
import Header from 'components/Header';
import Featured from 'components/Products/Featured';
import Leatest from 'components/Products/Leatest';
import Trending from 'components/Products/Trending';
import React from 'react';

export interface HomeProps {}

const Home = () => {
    return (
        <>
            <Header />

            <div className="flex flex-col items-center pt-22">
                <section className="bg-homeSection1Bg h-screen w-full flex justify-center">
                    <img className="w-96 h-96 absolute left-0" src="/img/lamp.png" alt="icon" />
                    <div className="w-5/6 flex items-center">
                        <div className="w-45p mr-5 ml-40">
                            <p className="font-bold text-pink text-base">
                                Best Furniture For Your Castle....
                            </p>
                            <p className="text-5xl font-extrabold my-3 ">
                                New Furniture Collection Trends in 2020
                            </p>
                            <p className="text-base font-bold text-textSoftGray">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
                                est adipiscing in phasellus non in justo.
                            </p>
                            <button
                                type="button"
                                className="py-4 px-10 rounded bg-pink text-white text-base font-bold mt-7">
                                Shop Now
                            </button>
                        </div>
                        <div className="w-55p ml-5">
                            <img src="/img/home_promotion.png" alt="img" />
                        </div>
                    </div>
                </section>
                <div className="w-4/6 flex flex-col mt-20">
                    <p className="text-4xl font-extrabold text-textPurple self-center mb-12">
                        Featured Products
                    </p>
                    <Featured />
                </div>
                <div className="w-4/6 flex flex-col mt-20">
                    <p className="text-4xl font-extrabold text-textPurple self-center mb-12">
                        Leatest Products
                    </p>
                    <Leatest />
                </div>
                <div className="bg-homeSection1Bg w-full flex justify-center mt-32">
                    <div className="w-4/6 flex items-center">
                        <div className="w-1/2">
                            <img src="/img/unique_product.png" alt="unique" />
                        </div>
                        <div className="w-1/2 pr-32">
                            <p className="text-4xl text-textPurple font-extrabold">
                                Unique Features Of leatest & Trending Poducts
                            </p>
                            <div className="flex items-center mt-7">
                                <div className="w-2.5 h-2.5 rounded-full bg-uniqueBulletBg mr-3" />
                                <p className="text-base font-medium text-uniqueBulletText">
                                    All frames constructed with hardwood solids and laminates
                                </p>
                            </div>
                            <div className="flex mt-3">
                                <div className="w-2.5 h-2.5 rounded-full bg-unique2BulletBg mr-3 mt-1.5" />
                                <p className="text-base font-medium text-uniqueBulletText">
                                    Reinforced with double wood dowels, glue, screw - nails corner
                                    blocks and machine nails
                                </p>
                            </div>
                            <div className="flex items-center mt-3">
                                <div className="w-2.5 h-2.5 rounded-full bg-unique3BulletBg mr-3" />
                                <p className="text-base font-medium text-uniqueBulletText">
                                    Arms, backs and seats are structurally reinforced
                                </p>
                            </div>
                            <div className="flex items-center mt-7">
                                <button
                                    type="button"
                                    className="py-3.5 px-8 rounded bg-pink text-white text-base font-bold">
                                    Add To Cart
                                </button>
                                <div className="ml-4 text-sm text-textPurple">
                                    <p className="font-semibold">B&B Italian Sofa</p>
                                    <p>$32.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-4/6 flex flex-col my-20">
                    <p className="text-4xl font-extrabold text-textPurple self-center mb-12">
                        Trending Products
                    </p>
                    <Trending />
                </div>
            </div>
            <Footer />
        </>
    );
};

Home.defaultProps = {};

export default React.memo(Home);
