import ShareButton from 'components/ShareButton';
import React from 'react';

const CardDetails = () => {
    return (
        <div className="flex shadow-2xl shadow-red-300 w-full">
            <div className="flex w-2/5">
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
                    className="w-80 h-full m-3 pb-6"
                    src="/img/shopDetails4.png"
                    alt="shopDetailsImage"
                />
            </div>
            <div className="flex flex-col w-3/5">
                <div className="mx-6 flex h-full flex-col justify-center">
                    <p className="text-4xl text-shopDetailTitle font-medium mb-1">
                        Playwood arm chair
                    </p>
                    <div className="flex items-center mt-1 mb-3">
                        <div className="flex">
                            <img className="w-3 h-3" src="/img/star_icon.png" alt="icon" />
                            <img className="w-3 h-3" src="/img/star_icon.png" alt="icon" />
                            <img className="w-3 h-3" src="/img/star_icon.png" alt="icon" />
                            <img className="w-3 h-3" src="/img/star_icon.png" alt="icon" />
                            <img className="w-3 h-3" src="/img/star_icon.png" alt="icon" />
                        </div>
                        <p className="ml-1 text-textPurple text-sm">(22)</p>
                    </div>
                    <div className="flex font-medium">
                        <p className="text-textPurple mr-2.5 text-base">Rp.26.000</p>
                        <p className="text-pink line-through text-base">Rp.42.000</p>
                    </div>
                    <p className="shopDetailTitle my-3 text-textPurple font-medium text-base">
                        Color
                    </p>
                    <p className="text-shopDetailDesc text-base mb-3">Blue, Red</p>
                    <p className="text-textPurple font-medium text-base">Categories</p>
                    <p className="my-3 text-textPurple font-medium text-base">Tags</p>
                    <div className="flex items-center">
                        <p className="mr-4 text-textPurple font-medium text-base">Share</p>
                        <ShareButton />
                    </div>
                </div>
                <div className="pb-5 pr-5 self-end">
                    <div className="flex items-center">
                        <button className="py-2 px-5 rounded-md bg-white shadow-md hover:bg-cardBg text-textPurple text-base">
                            <p>Add To Cart</p>
                        </button>
                        <button
                            type="button"
                            className="bg-white hover:bg-cardBg shadow-md rounded-full w-8 h-8 flex items-center justify-center ml-6">
                            <img className="w-4 h-4" src="/img/heart_icon.png" alt="icon" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

CardDetails.defaultProps = {};

export default React.memo(CardDetails);
