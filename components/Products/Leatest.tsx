import { isNil } from 'ramda';
import React, { useCallback, useState } from 'react';

const LeatestData = [
    {
        img: '/img/leatest1.png',
        title: 'Comfort Handy Craft',
        price: '65.000',
        discountPrice: '42.000'
    },
    {
        img: '/img/leatest1.png',
        title: 'Comfort Handy Craft',
        price: '65.000',
        discountPrice: '42.000'
    },
    {
        img: '/img/leatest3.png',
        title: 'Comfort Handy Craft',
        price: '65.000',
        discountPrice: '42.000'
    },
    {
        img: '/img/leatest4.png',
        title: 'Comfort Handy Craft',
        price: '65.000',
        discountPrice: '42.000'
    },
    {
        img: '/img/leatest5.png',
        title: 'Comfort Handy Craft',
        price: '65.000',
        discountPrice: '42.000'
    },
    {
        img: '/img/leatest6.png',
        title: 'Comfort Handy Craft',
        price: '65.000',
        discountPrice: '42.000'
    }
];

const Leatest = () => {
    return (
        <div className="grid grid-cols-3 gap-24">
            {!isNil(LeatestData) &&
                LeatestData.map((e, i) => {
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
                            className="flex flex-col w-85 h-80 cursor-pointer truncate">
                            <div className="bg-cardBg hover:bg-white h-80 w-85 flex items-center justify-center">
                                {isHover && (
                                    <div className=" relative -left-24 -top-24 z-20">
                                        <img className="w-20 h-14" src="/img/sale.png" alt="icon" />
                                    </div>
                                )}
                                <div className="relative top-24 -left-48">
                                    <button className="hover:bg-footerBg h-7 w-7 rounded-full flex items-center justify-center">
                                        <img
                                            className="w-4 h-4"
                                            src="/img/cart_icon_purple.png"
                                            alt="listImage"
                                        />
                                    </button>
                                    <button className="mt-2 hover:bg-footerBg h-7 w-7 rounded-full flex items-center justify-center">
                                        <img
                                            className="w-4 h-4"
                                            src="/img/heart_icon.png"
                                            alt="listImage"
                                        />
                                    </button>
                                </div>
                                <img
                                    className="w-56 h-56 absolute z-10"
                                    src={e.img}
                                    alt="listImage"
                                />
                            </div>
                            <div className="flex justify-between w-full mt-4 ">
                                <p className="text-textPurple text-base font-bol">{e.title}</p>
                                <div className="flex text-sm font-medium mt-0.5">
                                    <p className="text-textPurple mr-2.5">Rp.{e.discountPrice}</p>
                                    <p className="text-pink line-through">Rp.{e.price}</p>
                                </div>
                            </div>
                        </button>
                    );
                })}
        </div>
    );
};

Leatest.defaultProps = {};

export default React.memo(Leatest);
