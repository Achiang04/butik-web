import ShopCardItem from 'components/Card/ShopCardItem';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React, { useCallback } from 'react';

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
        image: '/img/image2.png',
        name: 'Ultricies condimentum imperdiet',
        price: '26.000',
        discountPrice: '42.000'
    },
    {
        id: 3,
        image: '/img/image3.png',
        name: 'Vitae suspendisse sed',
        price: '26.000',
        discountPrice: '42.000'
    },
    {
        id: 4,
        image: '/img/image4.png',
        name: 'Sed at fermentum',
        price: '26.000',
        discountPrice: '42.000'
    },
    {
        id: 5,
        image: '/img/image5.png',
        name: 'Fusce pellentesque at',
        price: '26.000',
        discountPrice: '42.000'
    },
    {
        id: 6,
        image: '/img/image6.png',
        name: 'Vestibulum magna laoreet',
        price: '26.000',
        discountPrice: '42.000'
    },
    {
        id: 7,
        image: '/img/image7.png',
        name: 'Sollicitudin amet orci ',
        price: '26.000',
        discountPrice: '42.000'
    },
    {
        id: 8,
        image: '/img/image8.png',
        name: 'Ultrices mauris sit',
        price: '26.000',
        discountPrice: '42.000'
    }
];

const Favourite = () => {
    const router = useRouter();

    const handleCardClick = useCallback((id) => {
        router.push(`/product_details/${id}`);
    }, []);

    return (
        <>
            <Head>
                <title>Butik</title>
            </Head>

            <Header />

            <div className="flex flex-col items-center pt-24">
                <div className="w-4/6 my-20">
                    <p className="text-2xl font-bold mb-5">Favourite</p>
                    <ShopCardItem data={productData} cardOnClick={handleCardClick} isRemove />
                </div>
            </div>

            <Footer />
        </>
    );
};

Favourite.defaultProps = {};

export default React.memo(Favourite);
