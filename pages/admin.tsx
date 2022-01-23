import clsx from 'clsx';
import AddProduct from 'components/Admin/AddProduct';
import CheckoutItem from 'components/Admin/CheckoutItem';
import ChooseProduct from 'components/Admin/ChooseProduct';
import TrendingProductForm from 'components/Admin/TrendingProductForm';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Head from 'next/head';
import React, { useCallback, useState } from 'react';

const Admin = () => {
    const [status, setStatus] = useState('checkoutItem');

    const handleChangeToAdd = useCallback(() => {
        setStatus('addProduct');
    }, []);

    const handleChangeToCheckout = useCallback(() => {
        setStatus('checkoutItem');
    }, []);

    const handleChangeToCollection = useCallback(() => {
        setStatus('addCollection');
    }, []);

    const handleChangeToChoose = useCallback(() => {
        setStatus('chooseProduct');
    }, []);

    const getScreen = useCallback((status) => {
        switch (status) {
            case 'checkoutItem':
                return <CheckoutItem />;
            case 'addProduct':
                return <AddProduct />;
            case 'addCollection':
                return <TrendingProductForm />;
            case 'chooseProduct':
                return <ChooseProduct />;
        }
    }, []);

    return (
        <>
            <Head>
                <title>Butik</title>
            </Head>

            <Header />

            <div className="flex flex-col items-center py-24">
                <div className="w-4/6 mt-20 rounded shadow-xl flex">
                    <div className="w-1/5 border-r">
                        <div className="flex flex-col self-start items-start w-full">
                            <button
                                className={clsx(
                                    'py-3 border-t border-b w-full hover:bg-cardBg',
                                    status === 'checkoutItem' && 'bg-cardBg'
                                )}
                                type="button"
                                onClick={handleChangeToCheckout}>
                                <p className="text-softGray text-base font-semibold">
                                    Checkout Item
                                </p>
                            </button>
                            <button
                                className={clsx(
                                    'py-3 border-t border-b w-full hover:bg-cardBg',
                                    status === 'addProduct' && 'bg-cardBg'
                                )}
                                type="button"
                                onClick={handleChangeToAdd}>
                                <p className="text-softGray text-base font-semibold">Add Product</p>
                            </button>
                            <button
                                className={clsx(
                                    'py-3 border-t border-b w-full hover:bg-cardBg',
                                    status === 'addCollection' && 'bg-cardBg'
                                )}
                                type="button"
                                onClick={handleChangeToCollection}>
                                <p className="text-softGray text-base font-semibold">
                                    Add Collection
                                </p>
                            </button>
                            <button
                                className={clsx(
                                    'py-3 border-t border-b w-full hover:bg-cardBg',
                                    status === 'chooseProduct' && 'bg-cardBg'
                                )}
                                type="button"
                                onClick={handleChangeToChoose}>
                                <p className="text-softGray text-base font-semibold">
                                    Choose Product
                                </p>
                            </button>
                        </div>
                    </div>
                    <div className="w-4/5 p-7">{getScreen(status)}</div>
                </div>
            </div>

            <Footer />
        </>
    );
};

Admin.defaultProps = {};

export default React.memo(Admin);
