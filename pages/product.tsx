import ShopCardItem from 'components/Card/ShopCardItem';
import Dropdown from 'components/Dropdown';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Search from 'components/Search';
import React from 'react';

export interface HomeProps {}

const dropdownData = ['ASC', 'DESC', 'Alphabet (A-Z)', 'Alphabet (Z-A)'];
const productData = [
    {
        image: '/img/image1.png',
        name: 'Vel elit euismod',
        price: '26.000',
        discountPrice: '42.000'
    },
    {
        image: '/img/image1.png',
        name: 'Ultricies condimentum imperdiet',
        price: '26.000',
        discountPrice: '42.000'
    },
    {
        image: '/img/image1.png',
        name: 'Vel elit euismod',
        price: '26.000',
        discountPrice: '42.000'
    },
    {
        image: '/img/image1.png',
        name: 'Vel elit euismod',
        price: '26.000',
        discountPrice: '42.000'
    },
    {
        image: '/img/image1.png',
        name: 'Vel elit euismod',
        price: '26.000',
        discountPrice: '42.000'
    },
    {
        image: '/img/image1.png',
        name: 'Vel elit euismod',
        price: '26.000',
        discountPrice: '42.000'
    },
    {
        image: '/img/image1.png',
        name: 'Vel elit euismod',
        price: '26.000',
        discountPrice: '42.000'
    },
    {
        image: '/img/image1.png',
        name: 'Vel elit euismod',
        price: '26.000',
        discountPrice: '42.000'
    },
    {
        image: '/img/image1.png',
        name: 'Vel elit euismod',
        price: '26.000',
        discountPrice: '42.000'
    },
    {
        image: '/img/image1.png',
        name: 'Vel elit euismod',
        price: '26.000',
        discountPrice: '42.000'
    },
    {
        image: '/img/image1.png',
        name: 'Vel elit euismod',
        price: '26.000',
        discountPrice: '42.000'
    },
    { image: '/img/image1.png', name: 'Vel elit euismod', price: '26.000', discountPrice: '42.000' }
];

const Product = () => {
    return (
        <div>
            <Header />

            <div className="flex justify-center pt-24">
                <div className="w-3/4 mt-10">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-textPurple text-xl font-semibold">
                                Ecommerce Acceories & Fashion item{' '}
                            </p>
                            <p className="text-xs text-textSoftGray">About 9,620 results</p>
                        </div>
                        <div className="flex items-center">
                            <div className="flex">
                                <p className="text-saleTage text-base mr-2 self-center">Sort By:</p>
                                <Dropdown data={dropdownData} />
                            </div>
                            <div className="ml-5">
                                <Search />
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 mb-20">
                        <ShopCardItem data={productData} />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

Product.defaultProps = {};

export default React.memo(Product);
