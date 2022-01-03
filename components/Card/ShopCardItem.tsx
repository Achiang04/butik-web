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
                            className="flex flex-col items-center justify-center w-64 h-85">
                            <div className="bg-cardBg hover:bg-cardBgHover h-72 w-64 flex items-center justify-center">
                                <img className="w-52 h-52" src={e.image} alt="listImage" />
                            </div>
                            <p className="mt-3.5 text-textPurple text-lg font-bold">
                                Vel elit euismod
                            </p>
                            <div className="flex text-sm font-medium">
                                <p className="text-textPurple mr-2.5">$26.00</p>
                                <p className="text-pink line-through">$42.00</p>
                            </div>
                        </button>
                    );
                })}
        </div>
    );
};

ShopCardItem.defaultProps = {};

export default React.memo(ShopCardItem);
