import clsx from 'clsx';
import { isNil } from 'ramda';
import React, { useCallback, useState } from 'react';

const FeatureData = [
    {
        img: '/img/featured1.png',
        title: 'Cantilever chair',
        price: '42.000'
    },
    {
        img: '/img/featured2.png',
        title: 'Cantilever chair',
        price: '42.000'
    },
    {
        img: '/img/featured3.png',
        title: 'Cantilever chair',
        price: '42.000'
    },
    {
        img: '/img/featured4.png',
        title: 'Cantilever chair',
        price: '42.000'
    }
];

const Featured = () => {
    return (
        <div className="flex justify-between">
            {!isNil(FeatureData) &&
                FeatureData.map((e, i) => {
                    const [isHover, setIsHover] = useState(false);

                    const setIsHoverTrue = useCallback(() => {
                        setIsHover(true);
                    }, []);

                    const setIsHoverFalse = useCallback(() => {
                        setIsHover(false);
                    }, []);

                    return (
                        <button
                            key={i}
                            type="button"
                            onMouseEnter={setIsHoverTrue}
                            onMouseLeave={setIsHoverFalse}
                            className={clsx(
                                'flex flex-col w-64 h-80 cursor-pointer truncate shadow-lg text-textPurple hover:text-white',
                                isHover && 'bg-featuredHoverBottomBg'
                            )}>
                            <div
                                className={clsx(
                                    'bg-cardBg h-60 w-64 flex items-center justify-center',
                                    isHover && 'bg-featuredHoverBg'
                                )}>
                                <div className="relative -top-24 -left-24 ml-2">
                                    <div className="flex">
                                        <button className="hover:bg-footerBg h-7 w-7 rounded-full flex items-center justify-center">
                                            <img
                                                className="w-4 h-4"
                                                src="/img/cart_icon_purple.png"
                                                alt="listImage"
                                            />
                                        </button>
                                        <button className="hover:bg-footerBg h-7 w-7 rounded-full flex items-center justify-center">
                                            <img
                                                className="w-4 h-4 fill-blueGradient"
                                                src="/img/heart_icon.png"
                                                alt="listImage"
                                            />
                                        </button>
                                    </div>
                                </div>
                                <img
                                    className="w-44 absolute mt-3 h-44"
                                    src={e.img}
                                    alt="featured"
                                />
                            </div>
                            <div className="flex flex-col items-center w-full">
                                <p className="mt-3.5 text-lg font-bol">{e.title}</p>
                                <div className="flex text-sm font-medium">
                                    <p className="mr-2.5">Rp.{e.price}</p>
                                </div>
                            </div>
                        </button>
                    );
                })}
        </div>
    );
};

Featured.defaultProps = {};

export default React.memo(Featured);
