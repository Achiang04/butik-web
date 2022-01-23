import React, { useCallback, useState } from 'react';

const data = [
    {
        id: 1,
        img: '/img/image1.png',
        name: 'Vel elit euismod',
        color: 'White',
        size: 'XL',
        price: '13.000',
        firstLine: false,
        secondLine: false
    },
    {
        id: 2,
        img: '/img/image1.png',
        name: 'Vel elit euismod',
        color: 'White',
        size: 'XL',
        price: '13.000',
        firstLine: false,
        secondLine: false
    },
    {
        id: 3,
        img: '/img/image1.png',
        name: 'Vel elit euismod',
        color: 'White',
        size: 'XL',
        price: '13.000',
        firstLine: false,
        secondLine: false
    },
    {
        id: 4,
        img: '/img/image1.png',
        name: 'Vel elit euismod',
        color: 'White',
        size: 'XL',
        price: '13.000',
        firstLine: false,
        secondLine: false
    },
    {
        id: 5,
        img: '/img/image1.png',
        name: 'Vel elit euismod',
        color: 'White',
        size: 'XL',
        price: '13.000',
        firstLine: false,
        secondLine: false
    }
];

const ChooseTrending = () => {
    const [collectionData, setCollectionData] = useState(data);

    const handleActiveFirstLineProduct = useCallback(
        (id) => () => {
            const checkActive = collectionData.filter((e) => e.firstLine);
            const temp = collectionData.find((e) => e.id === id);
            const tempIndex = collectionData.findIndex((e) => e.id === id);
            if (!temp.secondLine) {
                if (checkActive.length <= 3) {
                    const newData = { ...temp, firstLine: true };
                    const newCollectionData = [...collectionData];
                    newCollectionData[tempIndex] = newData;
                    setCollectionData(newCollectionData);
                }
            }
        },
        [collectionData]
    );

    const handleDisactiveFirstLineProduct = useCallback(
        (id) => () => {
            const temp = collectionData.find((e) => e.id === id);
            const tempIndex = collectionData.findIndex((e) => e.id === id);
            const newData = { ...temp, firstLine: false };
            const newCollectionData = [...collectionData];
            newCollectionData[tempIndex] = newData;
            setCollectionData(newCollectionData);
        },
        [collectionData]
    );

    const handleActiveSecondLineProduct = useCallback(
        (id) => () => {
            const checkActive = collectionData.filter((e) => e.secondLine);
            const temp = collectionData.find((e) => e.id === id);
            const tempIndex = collectionData.findIndex((e) => e.id === id);
            if (!temp.firstLine) {
                if (checkActive.length <= 2) {
                    const newData = { ...temp, secondLine: true };
                    const newCollectionData = [...collectionData];
                    newCollectionData[tempIndex] = newData;
                    setCollectionData(newCollectionData);
                }
            }
        },
        [collectionData]
    );

    const handleDisactiveSecondLineProduct = useCallback(
        (id) => () => {
            const temp = collectionData.find((e) => e.id === id);
            const tempIndex = collectionData.findIndex((e) => e.id === id);
            const newData = { ...temp, secondLine: false };
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
                            <th className="w-2/5 flex">Product</th>
                            <th className="w-1/5 flex">Price</th>
                            <th className="w-1/5 flex">First Line</th>
                            <th className="w-1/5 flex">Second Line</th>
                        </tr>
                    </thead>

                    <tbody>
                        {collectionData.map((e, i) => {
                            return (
                                <tr
                                    key={i}
                                    className="flex  w-full bg-white shadow-md p-3 items-center mt-5 rounded">
                                    <td className="flex items-center w-2/5">
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
                                    <td className="w-1/5 flex">
                                        <p className="text-sm text-softGray">Rp. {e.price}</p>
                                    </td>
                                    <td className="w-1/5 flex">
                                        <input
                                            type="checkbox"
                                            checked={e.firstLine}
                                            onChange={
                                                e.firstLine
                                                    ? handleDisactiveFirstLineProduct(e.id)
                                                    : handleActiveFirstLineProduct(e.id)
                                            }
                                        />
                                    </td>
                                    <td className="w-1/5 flex">
                                        <input
                                            type="checkbox"
                                            checked={e.secondLine}
                                            onChange={
                                                e.secondLine
                                                    ? handleDisactiveSecondLineProduct(e.id)
                                                    : handleActiveSecondLineProduct(e.id)
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
