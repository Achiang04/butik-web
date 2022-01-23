import React, { useCallback, useState } from 'react';

const data = [
    {
        id: 1,
        img: '/img/image1.png',
        name: 'Vel elit euismod',
        color: 'White',
        size: 'XL',
        price: '13.000',
        active: false
    },
    {
        id: 2,
        img: '/img/image1.png',
        name: 'Vel elit euismod',
        color: 'White',
        size: 'XL',
        price: '13.000',
        active: false
    },
    {
        id: 3,
        img: '/img/image1.png',
        name: 'Vel elit euismod',
        color: 'White',
        size: 'XL',
        price: '13.000',
        active: false
    },
    {
        id: 4,
        img: '/img/image1.png',
        name: 'Vel elit euismod',
        color: 'White',
        size: 'XL',
        price: '13.000',
        active: false
    },
    {
        id: 5,
        img: '/img/image1.png',
        name: 'Vel elit euismod',
        color: 'White',
        size: 'XL',
        price: '13.000',
        active: false
    }
];

const ChooseTrending = () => {
    const [collectionData, setCollectionData] = useState(data);

    const handleActiveProduct = useCallback(
        (id) => () => {
            console.log('handleActiveProduct');
            const temp = collectionData.find((e) => e.id === id);
            const tempIndex = collectionData.findIndex((e) => e.id === id);
            const newData = { ...temp, active: true };
            const newCollectionData = [...collectionData];
            newCollectionData[tempIndex] = newData;
            setCollectionData(newCollectionData);
        },
        [collectionData]
    );

    const handleDisactiveProduct = useCallback(
        (id) => () => {
            console.log('handleDisactiveProduct');
            const temp = collectionData.find((e) => e.id === id);
            const tempIndex = collectionData.findIndex((e) => e.id === id);
            const newData = { ...temp, active: false };
            const newCollectionData = [...collectionData];
            newCollectionData[tempIndex] = newData;
            setCollectionData(newCollectionData);
        },
        [collectionData]
    );

    return (
        <>
            <div className="flex flex-col w-full">
                <table className="w-full">
                    <thead>
                        <tr className="flex text-xl text-textDarkPurple mb-10">
                            <th className="w-2/4 flex">Product</th>
                            <th className="w-1/4 flex">Price</th>
                            <th className="w-1/4 flex">Select</th>
                        </tr>
                    </thead>

                    <tbody>
                        {collectionData.map((e, i) => {
                            return (
                                <tr
                                    key={i}
                                    className="flex  w-full bg-white shadow-md p-3 items-center mt-5 rounded">
                                    <td className="flex items-center w-2/4">
                                        <img className="w-20 h-20" src={e.img} alt="product" />
                                        <div className="ml-3">
                                            <p className="text-sm">{e.name}</p>
                                            <p className="text-sm text-textProductCartGray">
                                                Color: {e.color}
                                            </p>
                                            <p className="text-xs text-textProductCartGray">
                                                Size: {e.size}
                                            </p>
                                        </div>
                                    </td>
                                    <td className="w-1/4 flex">
                                        <p className="text-sm text-softGray">Rp. {e.price}</p>
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            checked={e.active}
                                            onChange={
                                                e.active
                                                    ? handleDisactiveProduct(e.id)
                                                    : handleActiveProduct(e.id)
                                            }
                                        />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
};

ChooseTrending.defaultProps = {};

export default React.memo(ChooseTrending);
