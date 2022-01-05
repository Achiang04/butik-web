import React from 'react';

export interface FooterProps {}

const Footer = () => {
    return (
        <div className="absolute  w-full z-30">
            <div className="flex flex-col items-center bg-footerBg">
                <div className="w-3/4 my-10 flex justify-between">
                    <div>
                        <p className="text-4xl text-textBlack font-extrabold mb-5">Butik</p>
                        <p className="text-textSoftGray">Contact Info</p>
                        <p className="text-textSoftGray">
                            Jl. Bukit Indah Raya I No. 26, Sukajadi , Batam
                        </p>
                    </div>
                    <div>
                        <p className="text-xl font-semibold mb-5">Categories</p>
                        <p className="text-textSoftGray">Laptops & Computers</p>
                        <p className="text-textSoftGray">Cameras & Photography</p>
                        <p className="text-textSoftGray">Smart Phones & Tablets</p>
                    </div>
                    <div>
                        <p className="text-xl font-semibold mb-5">Customer Care</p>
                        <p className="text-textSoftGray">My Account</p>
                        <p className="text-textSoftGray">Discount</p>
                        <p className="text-textSoftGray">Returns</p>
                    </div>
                    <div>
                        <p className="text-xl font-semibold mb-5">Pages</p>
                        <p className="text-textSoftGray">Products</p>
                        <p className="text-textSoftGray">About</p>
                        <p className="text-textSoftGray">Contact</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center bg-secondFooterBg">
                <div className="w-3/4 py-4">
                    <p className="font-semibold text-textFooter">©Webecy - All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};

Footer.defaultProps = {};

export default React.memo(Footer);
