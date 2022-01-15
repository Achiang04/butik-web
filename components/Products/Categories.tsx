import clsx from 'clsx';
import { isNil } from 'ramda';
import React, { useCallback, useState } from 'react';

const CategoriesData = [
    {
        img: '/img/categories1.png',
        title: 'Cantilever chair',
        price: '42.000'
    },
    {
        img: '/img/categories2.png',
        title: 'Cantilever chair',
        price: '42.000'
    },
    {
        img: '/img/categories3.png',
        title: 'Cantilever chair',
        price: '42.000'
    },
    {
        img: '/img/categories4.png',
        title: 'Cantilever chair',
        price: '42.000'
    }
];

const Categories = () => {
    return (
        <div className="flex justify-between">
            {!isNil(CategoriesData) &&
                CategoriesData.map((e, i) => {
                    const [isHover, setIsHover] = useState(false);

                    const setIsHoverTrue = useCallback(() => {
                        setIsHover(true);
                    }, []);

                    const setIsHoverFalse = useCallback(() => {
                        setIsHover(false);
                    }, []);

                    return (
                        <button
                            key={i}
                            type="button"
                            onMouseEnter={setIsHoverTrue}
                            onMouseLeave={setIsHoverFalse}
                            className={clsx('flex flex-col w-72 h-96 cursor-pointer truncate')}>
                            <div className="flex items-center justify-center">
                                <img
                                    className={clsx('w-72 h-72', isHover && 'absolute')}
                                    src={'/img/bgCategories.png'}
                                    alt="categories"
                                />
                                {isHover && (
                                    <img
                                        className="w-72 h-72 mt-2 mr-2"
                                        src={'/img/hoverBgCategories.png'}
                                        alt="categories"
                                    />
                                )}
                                <img className="absolute w-44 h-44" src={e.img} alt="categories" />
                            </div>
                            <div
                                className={clsx(
                                    'flex flex-col items-center w-full',
                                    isHover && '-mt-2'
                                )}>
                                <p className="mt-3.5 text-lg font-bol">{e.title}</p>
                                <div className="flex text-sm font-medium">
                                    <p className="mr-2.5">Rp.{e.price}</p>
                                </div>
                            </div>
                        </button>
                    );
                })}
        </div>
    );
};

Categories.defaultProps = {};

export default React.memo(Categories);
