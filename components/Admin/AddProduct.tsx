import clsx from 'clsx';
import AllProductForm from 'components/Admin/AllProductForm';
import DiscountProductForm from 'components/Admin/DiscountProductForm';
import HeaderProductForm from 'components/Admin/HeaderProductForm';
import UnqiueProductForm from 'components/Admin/UnqiueProductForm';
import React, { useCallback, useState } from 'react';

const AddProduct = () => {
    const [status, setStatus] = useState('allProduct');

    const handleChangeToAll = useCallback(() => {
        setStatus('allProduct');
    }, []);

    const handleChangeToHeader = useCallback(() => {
        setStatus('header');
    }, []);

    const handleChangeToUnique = useCallback(() => {
        setStatus('unique');
    }, []);

    const handleChangeToDiscount = useCallback(() => {
        setStatus('discount');
    }, []);

    const getScreen = useCallback((status) => {
        switch (status) {
            case 'allProduct':
                return <AllProductForm />;
            case 'header':
                return <HeaderProductForm />;
            case 'unique':
                return <UnqiueProductForm />;
            case 'discount':
                return <DiscountProductForm />;
        }
    }, []);

    return (
        <>
            <div className="flex flex-col w-full">
                <p className="text-2xl font-bold mb-5">Add Product</p>
                <div className="flex">
                    <button
                        className={clsx(
                            'py-1 border border-borderGray w-full hover:bg-cardBg rounded-md mr-3',
                            status === 'allProduct' && 'bg-cardBg'
                        )}
                        type="button"
                        onClick={handleChangeToAll}>
                        <p className="text-base">All Product</p>
                    </button>
                    <button
                        className={clsx(
                            'py-1 border border-borderGray w-full hover:bg-cardBg rounded-md mr-3',
                            status === 'header' && 'bg-cardBg'
                        )}
                        type="button"
                        onClick={handleChangeToHeader}>
                        <p className="text-base">Header Product</p>
                    </button>
                    <button
                        className={clsx(
                            'py-1 border border-borderGray w-full hover:bg-cardBg rounded-md mr-3',
                            status === 'unique' && 'bg-cardBg'
                        )}
                        type="button"
                        onClick={handleChangeToUnique}>
                        <p className="text-base">Unique Product</p>
                    </button>
                    <button
                        className={clsx(
                            'py-1 border border-borderGray w-full hover:bg-cardBg rounded-md mr-3',
                            status === 'discount' && 'bg-cardBg'
                        )}
                        type="button"
                        onClick={handleChangeToDiscount}>
                        <p className="text-base">Discount Product</p>
                    </button>
                </div>
                <div className="mt-5">{getScreen(status)}</div>
            </div>
        </>
    );
};

AddProduct.defaultProps = {};

export default React.memo(AddProduct);
