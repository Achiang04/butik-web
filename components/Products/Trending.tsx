import clsx from 'clsx';
import { isNil } from 'ramda';
import React, { useCallback, useState } from 'react';

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
    }
];

const Trending = () => {
    return (
        <div className="flex justify-between">
            {!isNil(TrendingData) &&
                TrendingData.map((e, i) => {
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
                                <img className="w-44 absolute h-44" src={e.img} alt="featured" />
                            </div>
                            <div className="flex flex-col items-center w-full">
                                <p className="mt-4 text-lg font-bol">{e.title}</p>
                                <div className="flex text-sm font-medium">
                                    <p className="text-textPurple mr-2.5">Rp.{e.discountPrice}</p>
                                    <p className="text-textSoftGray line-through">Rp.{e.price}</p>
                                </div>
                            </div>
                        </button>
                    );
                })}
        </div>
    );
};

Trending.defaultProps = {};

export default React.memo(Trending);
