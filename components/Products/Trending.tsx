import clsx from 'clsx';
import { isNil } from 'ramda';
import React from 'react';

const TrendingData = [
    {
        img: '/img/trending1.png',
        title: 'Cantilever chair',
        price: '42.000',
        discountPrice: '26.000'
    },
    {
        img: '/img/trending2.png',
        title: 'Cantilever chair',
        price: '42.000',
        discountPrice: '26.000'
    },
    {
        img: '/img/trending3.png',
        title: 'Cantilever chair',
        price: '42.000',
        discountPrice: '26.000'
    },
    {
        img: '/img/trending4.png',
        title: 'Cantilever chair',
        price: '42.000',
        discountPrice: '26.000'
    },
    {
        img: '/img/trending5.png',
        title: '23% off in all products',
        price: 'Shop Now',
        discountPrice: ''
    },
    {
        img: '/img/trending6.png',
        title: '23% off in all products',
        price: 'View Collection',
        discountPrice: ''
    },
    {
        img: '/img/trending7.png',
        title: 'Executive Seat chair',
        price: '42.000',
        discountPrice: '26.000'
    },
    {
        img: '/img/trending8.png',
        title: 'Executive Seat chair',
        price: '42.000',
        discountPrice: '26.000'
    },
    {
        img: '/img/trending9.png',
        title: 'Executive Seat chair',
        price: '42.000',
        discountPrice: '26.000'
    }
];

const Trending = () => {
    return (
        <>
            <div className="grid grid-rows-2">
                <div className="grid grid-cols-4 gap-20">
                    {!isNil(TrendingData) &&
                        TrendingData.map((e, i) => {
                            if (i < 4) {
                                return (
                                    <button
                                        key={i}
                                        type="button"
                                        className={clsx(
                                            'flex flex-col w-64 h-83 cursor-pointer truncate shadow-lg text-textPurple bg-white p-2 border border-cardBg'
                                        )}>
                                        <div
                                            className={clsx(
                                                'bg-trendingBg h-60 w-60 flex items-center justify-center self-center'
                                            )}>
                                            <img
                                                className="w-44 absolute h-44"
                                                src={e.img}
                                                alt="featured"
                                            />
                                        </div>
                                        <div className="flex flex-col items-center w-full">
                                            <p className="mt-4 text-lg font-medium">{e.title}</p>
                                            <div className="flex text-sm">
                                                <p className="text-textPurple mr-2.5">
                                                    Rp.{e.discountPrice}
                                                </p>
                                                <p className="text-textSoftGray line-through">
                                                    Rp.{e.price}
                                                </p>
                                            </div>
                                        </div>
                                    </button>
                                );
                            }
                        })}
                </div>
                <div className="grid grid-cols-3 mt-10 gap-48">
                    {!isNil(TrendingData) &&
                        TrendingData.map((e, i) => {
                            if (i >= 4 && i <= 5) {
                                let productColor = '';
                                switch (i) {
                                    case 4:
                                        productColor = 'tredingBottomProductBg';
                                        break;
                                    case 5:
                                        productColor = 'footerBg';
                                        break;
                                    default:
                                        productColor = '';
                                        break;
                                }

                                return (
                                    <button
                                        key={i}
                                        type="button"
                                        className={clsx(
                                            'flex flex-col w-106 h-72 cursor-pointer truncate shadow-lg p-6 font-medium',
                                            `bg-${productColor}`
                                        )}>
                                        <p className="text-2xl text-textPurple">{e.title}</p>
                                        <p className="text-base text-pink underline mt-1">
                                            {e.price}
                                        </p>
                                        <div className="self-end">
                                            <img className="w-52 h-52" src={e.img} alt="trending" />
                                        </div>
                                    </button>
                                );
                            }
                        })}
                    <div className="grid grid-rows-3 gap-6 h-72 ml-2">
                        {!isNil(TrendingData) &&
                            TrendingData.map((e, i) => {
                                if (i >= 6 && i <= 8) {
                                    return (
                                        <button
                                            key={i}
                                            type="button"
                                            className={clsx(
                                                'flex w-72 h-20 cursor-pointer truncate shadow-lg font-medium'
                                            )}>
                                            <div className="w-35p h-full bg-trendingBg flex items-center justify-center">
                                                <img
                                                    className="w-16 h-16"
                                                    src={e.img}
                                                    alt="trending"
                                                />
                                            </div>
                                            <div className="w-65p flex flex-col justify-center h-full ml-3">
                                                <p className="text-base text-textPurple fomt-medium">
                                                    {e.title}
                                                </p>
                                                <div className="flex text-sm font-medium mt-0.5">
                                                    <p className="text-textPurple mr-2.5">
                                                        Rp.{e.discountPrice}
                                                    </p>
                                                    <p className="text-pink line-through">
                                                        Rp.{e.price}
                                                    </p>
                                                </div>
                                            </div>
                                        </button>
                                    );
                                }
                            })}
                    </div>
                </div>
            </div>
        </>
    );
};

Trending.defaultProps = {};

export default React.memo(Trending);
