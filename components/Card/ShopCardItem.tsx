import { isNil } from 'ramda';
import React from 'react';

interface CardProps {
    image: string;
    name: string;
    price: string;
    discountPrice: string;
}

interface ShopCardProps {
    data: Array<CardProps>;
}

const ShopCardItem = ({ data }: ShopCardProps) => {
    return (
        <div className="grid grid-cols-4">
            {!isNil(data) &&
                data.map((e, i) => {
                    return (
                        <button
                            key={i}
                            className="flex flex-col items-center justify-center w-64 h-85 mt-10 mx-3 cursor-pointer truncate">
                            <div className="bg-cardBg hover:bg-cardBgHover h-72 w-64 flex items-center">
                                <div className="relative top-24 mx-2">
                                    <button className="hover:bg-white h-7 w-7 rounded-full flex items-center justify-center absolute -bottom-1">
                                        <img
                                            className="w-4 h-4"
                                            src="/img/cart_icon_purple.png"
                                            alt="listImage"
                                        />
                                    </button>
                                    <button className="mt-2 hover:bg-white h-7 w-7 rounded-full flex items-center justify-center absolute">
                                        <img
                                            className="w-4 h-4"
                                            src="/img/heart_icon.png"
                                            alt="listImage"
                                        />
                                    </button>
                                </div>
                                <img className="w-52 h-52" src={e.image} alt="listImage" />
                            </div>
                            <div className="flex flex-col items-center w-full">
                                <p className="mt-3.5 text-textPurple text-lg font-bol">{e.name}</p>
                                <div className="flex text-sm font-medium">
                                    <p className="text-textPurple mr-2.5">Rp.{e.price}</p>
                                    <p className="text-pink line-through">Rp.{e.discountPrice}</p>
                                </div>
                            </div>
                        </button>
                    );
                })}
        </div>
    );
};

ShopCardItem.defaultProps = {};

export default React.memo(ShopCardItem);
