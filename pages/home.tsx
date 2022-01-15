import Footer from 'components/Footer';
import Header from 'components/Header';
import Categories from 'components/Products/Categories';
import Featured from 'components/Products/Featured';
import Leatest from 'components/Products/Leatest';
import Trending from 'components/Products/Trending';
import React, { useCallback } from 'react';

export interface HomeProps {}

const Home = () => {
    const checkText = useCallback((text) => {
        return (
            <div className="flex items-center mb-2.5">
                <img className="w-4 h-3 mr-2" src="/img/check_icon.png" alt="icon" />
                <p className="text-base text-discountDescText">{text}</p>
            </div>
        );
    }, []);

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
                                className="py-4 px-10 rounded-md bg-pink text-white text-base font-bold mt-7">
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
                                    className="py-3.5 px-8 rounded-md bg-pink text-white text-base font-bold">
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
                <div className="w-4/6 flex flex-col mt-20">
                    <p className="text-4xl font-extrabold text-textPurple self-center mb-12">
                        Trending Products
                    </p>
                    <Trending />
                </div>
                <div className="w-4/6 flex flex-col mt-20">
                    <p className="text-4xl font-extrabold text-textPurple self-center ">
                        Discount Item
                    </p>
                    <div className="flex">
                        <div className="w-1/2 flex flex-col justify-center">
                            <p className="text-4xl text-textPurple font-extrabold">
                                20% Discount Of All Products
                            </p>
                            <p className="text-pink text-xl font-medium mt-4 mb-5">
                                Eams Sofa Compact
                            </p>
                            <p className="text-base text-discountDescText mb-7">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
                                feugiat habitasse nec, bibendum condimentum.
                            </p>
                            <div className="flex">
                                <div>
                                    {checkText('Material expose like metals')}
                                    {checkText('Simple neutral colours')}
                                </div>
                                <div className="ml-10">
                                    {checkText('Clear lines and geomatric figures')}
                                    {checkText('Material expose like metals')}
                                </div>
                            </div>
                            <button
                                type="button"
                                className="w-52 h-14 rounded-md bg-pink text-white text-base font-bold mt-10">
                                Shop Now
                            </button>
                        </div>
                        <div className="w-1/2">
                            <img className="" src="/img/discount.png" alt="discount" />
                        </div>
                    </div>
                </div>
                <div className="h-110 w-full mt-32 flex justify-center items-center">
                    <img className="absolute z-10" src="/img/home_subscribe.png" alt="" />
                    <div className="relative w-4/6 z-20 flex flex-col mt-5 items-center justify-center">
                        <p className="text-4xl text-textPurple font-extrabold">
                            Get Leatest Update By Subscribe
                        </p>
                        <p className="text-4xl text-textPurple font-extrabold">Our Newslater</p>
                        <button
                            type="button"
                            className="w-52 h-14 rounded-md bg-pink text-white text-base font-bold mt-7">
                            Shop Now
                        </button>
                    </div>
                </div>
                <div className="w-4/6 flex flex-col my-20">
                    <p className="text-4xl font-extrabold text-textPurple self-center mb-12">
                        Top Categories
                    </p>
                    <Categories />
                </div>
            </div>
            <Footer />
        </>
    );
};

Home.defaultProps = {};

export default React.memo(Home);
