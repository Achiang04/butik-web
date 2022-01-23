import clsx from 'clsx';
import React, { useCallback, useState } from 'react';

import ChooseCategoriesProduct from './ChooseCategoriesProduct';
import ChooseFeatured from './ChooseFeatured';
import ChooseLeatest from './ChooseLeatest';
import ChooseTrending from './ChooseTrending';

const ChooseProduct = () => {
    const [status, setStatus] = useState('featuredProduct');

    const handleChangeToFeatured = useCallback(() => {
        setStatus('featuredProduct');
    }, []);

    const handleChangeToLeatest = useCallback(() => {
        setStatus('leatestProduct');
    }, []);

    const handleChangeToTrending = useCallback(() => {
        setStatus('trendingProduct');
    }, []);

    const handleChangeToCategories = useCallback(() => {
        setStatus('categoriesProduct');
    }, []);

    const getScreen = useCallback((status) => {
        switch (status) {
            case 'featuredProduct':
                return <ChooseFeatured />;
            case 'leatestProduct':
                return <ChooseLeatest />;
            case 'trendingProduct':
                return <ChooseTrending />;
            case 'categoriesProduct':
                return <ChooseCategoriesProduct />;
        }
    }, []);

    return (
        <>
            <div className="flex flex-col w-full">
                <p className="text-2xl font-bold mb-5">Choose product for the collection</p>
                <div className="flex">
                    <button
                        className={clsx(
                            'py-1 border border-borderGray w-full hover:bg-cardBg rounded-md mr-3',
                            status === 'featuredProduct' && 'bg-cardBg'
                        )}
                        type="button"
                        onClick={handleChangeToFeatured}>
                        <p className="text-base">Featured Product</p>
                    </button>
                    <button
                        className={clsx(
                            'py-1 border border-borderGray w-full hover:bg-cardBg rounded-md mr-3',
                            status === 'leatestProduct' && 'bg-cardBg'
                        )}
                        type="button"
                        onClick={handleChangeToLeatest}>
                        <p className="text-base">Leatest Product</p>
                    </button>
                    <button
                        className={clsx(
                            'py-1 border border-borderGray w-full hover:bg-cardBg rounded-md mr-3',
                            status === 'trendingProduct' && 'bg-cardBg'
                        )}
                        type="button"
                        onClick={handleChangeToTrending}>
                        <p className="text-base">Trending Product</p>
                    </button>
                    <button
                        className={clsx(
                            'py-1 border border-borderGray w-full hover:bg-cardBg rounded-md mr-3',
                            status === 'categoriesProduct' && 'bg-cardBg'
                        )}
                        type="button"
                        onClick={handleChangeToCategories}>
                        <p className="text-base">Top Categories Product</p>
                    </button>
                </div>
                <div className="mt-5">{getScreen(status)}</div>
            </div>
        </>
    );
};

ChooseProduct.defaultProps = {};

export default React.memo(ChooseProduct);
