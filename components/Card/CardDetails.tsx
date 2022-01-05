import ShareButton from 'components/ShareButton';
import React from 'react';

export interface CardDetailsProps {}

const CardDetails = () => {
    return (
        <div className="flex shadow-2xl shadow-red-300 w-full">
            <div className="flex">
                <div className="flex flex-col justify-between m-3">
                    <img className="w-36 h-36" src="/img/shopDetails1.png" alt="shopDetailsImage" />
                    <img
                        className="w-36 h-36 my-3"
                        src="/img/shopDetails2.png"
                        alt="shopDetailsImage"
                    />
                    <img className="w-36 h-36" src="/img/shopDetails3.png" alt="shopDetailsImage" />
                </div>
                <img
                    className="w-80 h-110 m-3"
                    src="/img/shopDetails4.png"
                    alt="shopDetailsImage"
                />
            </div>
            <div className="mx-6 flex flex-col justify-center">
                <p className="text-4xl text-shopDetailTitle font-medium mb-1">Playwood arm chair</p>
                <div className="flex items-center mb-3">
                    <div className="flex">
                        <img className="w-3 h-3" src="/img/star_icon.png" alt="icon" />
                        <img className="w-3 h-3" src="/img/star_icon.png" alt="icon" />
                        <img className="w-3 h-3" src="/img/star_icon.png" alt="icon" />
                        <img className="w-3 h-3" src="/img/star_icon.png" alt="icon" />
                        <img className="w-3 h-3" src="/img/star_icon.png" alt="icon" />
                    </div>
                    <p className="ml-1 text-textPurple text-sm">(22)</p>
                </div>
                <div className="flex text-sm font-medium">
                    <p className="text-textPurple mr-2.5">Rp.26.000</p>
                    <p className="text-pink line-through">Rp.42.000</p>
                </div>
                <p className="shopDetailTitle my-3 font-medium">Color</p>
                <p className="text-shopDetailDesc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor
                    purus, et volutpat sit.
                </p>
                <div className="my-3">
                    <button className="flex items-center ">
                        <p className="text-textPurple">Add To Cart</p>
                        <div className="bg-white shadow-md rounded-full w-8 h-8 flex items-center justify-center ml-6">
                            <img className="w-4 h-4" src="/img/heart_icon.png" alt="icon" />
                        </div>
                    </button>
                </div>
                <p className="text-textPurple font-medium">Categories</p>
                <p className="my-3 text-textPurple font-medium">Tags</p>
                <div className="flex items-center">
                    <p className="mr-4 text-textPurple font-medium">Share</p>
                    {/* <div className="bg-red-200 self-center"> */}
                    <ShareButton />
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
};

CardDetails.defaultProps = {};

export default React.memo(CardDetails);
