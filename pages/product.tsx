import ShopCardItem from 'components/Card/ShopCardItem';
import Dropdown from 'components/Dropdown';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Search from 'components/Search';
import { useRouter } from 'next/dist/client/router';
import React, { useCallback } from 'react';

interface ProductProps {}

const dropdownData = ['ASC', 'DESC', 'Alphabet (A-Z)', 'Alphabet (Z-A)'];
const productData = [
    {
        id: 1,
        image: '/img/image1.png',
        name: 'Vel elit euismod',
        price: '26.000',
        discountPrice: '42.000'
    },
    {
        id: 2,
        image: '/img/image1.png',
        name: 'Ultricies condimentum imperdiet',
        price: '26.000',
        discountPrice: '42.000'
    },
    {
        id: 3,
        image: '/img/image1.png',
        name: 'Vel elit euismod',
        price: '26.000',
        discountPrice: '42.000'
    },
    {
        id: 4,
        image: '/img/image1.png',
        name: 'Vel elit euismod',
        price: '26.000',
        discountPrice: '42.000'
    },
    {
        id: 5,
        image: '/img/image1.png',
        name: 'Vel elit euismod',
        price: '26.000',
        discountPrice: '42.000'
    },
    {
        id: 6,
        image: '/img/image1.png',
        name: 'Vel elit euismod',
        price: '26.000',
        discountPrice: '42.000'
    },
    {
        id: 7,
        image: '/img/image1.png',
        name: 'Vel elit euismod',
        price: '26.000',
        discountPrice: '42.000'
    },
    {
        id: 8,
        image: '/img/image1.png',
        name: 'Vel elit euismod',
        price: '26.000',
        discountPrice: '42.000'
    },
    {
        id: 9,
        image: '/img/image1.png',
        name: 'Vel elit euismod',
        price: '26.000',
        discountPrice: '42.000'
    },
    {
        id: 10,
        image: '/img/image1.png',
        name: 'Vel elit euismod',
        price: '26.000',
        discountPrice: '42.000'
    },
    {
        id: 11,
        image: '/img/image1.png',
        name: 'Vel elit euismod',
        price: '26.000',
        discountPrice: '42.000'
    },
    {
        id: 12,
        image: '/img/image1.png',
        name: 'Vel elit euismod',
        price: '26.000',
        discountPrice: '42.000'
    }
];

const Product = () => {
    const router = useRouter();

    const handleCardClick = useCallback((id) => {
        router.push(`/product_details/${id}`);
    }, []);

    return (
        <>
            <Header />

            <div className="flex justify-center pt-24">
                <div className="w-3/4 mt-20">
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
                        <ShopCardItem data={productData} cardOnClick={handleCardClick} />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

Product.defaultProps = {};

export default React.memo(Product);
