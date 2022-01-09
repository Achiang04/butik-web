import Link from 'next/link';
import React from 'react';

import HeaderMenu from './HeaderMenu';

const Header = () => {
    return (
        <div className="fixed w-full z-30">
            <div className="bg-violet h-6 flex items-center justify-center">
                <div className="flex w-4/6">
                    <div className="flex items-center">
                        <img className="w-4 h-4 mr-2.5" src="/img/mail_icon.png" alt="icon" />
                        <p className="mr-12 text-textWhite text-sm">ummifiracollection@gmail.com</p>
                        <img className="w-4 h-4 mr-2.5" src="/img/phone_icon.png" alt="icon" />
                        <p className="text-textWhite text-sm">082284914253</p>
                    </div>
                </div>
            </div>
            <div className="bg-white h-16 flex items-center justify-center border-b shadow-md">
                <div className="flex w-4/6 justify-between">
                    <div className="flex items-center">
                        <Link href="/home">
                            <p className="text-4xl text-textBlack font-extrabold cursor-pointer">
                                Butik
                            </p>
                        </Link>
                        <div className="flex ml-20">
                            <HeaderMenu text="Home" location="/home" />
                            <HeaderMenu text="Product" location="/product" />
                            <HeaderMenu text="About" location="/about" />
                            <HeaderMenu text="Contact" location="/contact" />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="border border-pink rounded bg-pink shadow-md px-1.5 py-1.5 mr-2 flex items-center cursor-pointer">
                            <img className="w-6 h-6" src="/img/user_icon.png" alt="icon" />
                        </div>
                        <div className="border border-pink rounded bg-pink shadow-md px-1.5 py-1.5 flex items-center cursor-pointer">
                            <img className="w-6 h-6" src="/img/cart_icon.png" alt="icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Header.defaultProps = {
    textSizeLabel: 'sm',
    textColorLabel: 'gray-700',
    marginBottomLabel: '1',
    withFormik: false
};

export default React.memo(Header);
