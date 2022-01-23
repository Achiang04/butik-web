import React from 'react';

const data = [
    {
        img: '/img/image1.png',
        name: 'Vel elit euismod',
        color: 'White',
        quantity: 2,
        size: 'XL',
        price: '13.000',
        buyer: 'bambang',
        buyerPhoneNumber: '081234567890'
    },
    {
        img: '/img/image1.png',
        name: 'Vel elit euismod',
        color: 'White',
        quantity: 2,
        size: 'XL',
        price: '13.000',
        buyer: 'bambang',
        buyerPhoneNumber: '081234567890'
    },
    {
        img: '/img/image1.png',
        name: 'Vel elit euismod',
        color: 'White',
        quantity: 2,
        size: 'XL',
        price: '13.000',
        buyer: 'bambang',
        buyerPhoneNumber: '081234567890'
    },
    {
        img: '/img/image1.png',
        name: 'Vel elit euismod',
        color: 'White',
        quantity: 2,
        size: 'XL',
        price: '13.000',
        buyer: 'bambang',
        buyerPhoneNumber: '081234567890'
    },
    {
        img: '/img/image1.png',
        name: 'Vel elit euismod',
        color: 'White',
        quantity: 2,
        size: 'XL',
        price: '13.000',
        buyer: 'bambang',
        buyerPhoneNumber: '081234567890'
    }
];

const CheckoutItem = () => {
    return (
        <div>
            <p className="text-2xl font-bold mb-5">Checkout List Item</p>
            <table className="w-full">
                <thead>
                    <tr className="flex text-xl text-textDarkPurple mb-10">
                        <th className="w-2/5 flex">Product</th>
                        <th className="w-1/5 flex">Quantity</th>
                        <th className="w-1/5 flex">Price</th>
                        <th className="w-1/5 flex">Buyer</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((e, i) => {
                        const totalPrice = parseInt(e.price) * e.quantity * 1000;
                        const formatTotalPrice = totalPrice
                            .toString()
                            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '.');

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
                                <td className="w-1/5 flex">{e.quantity}</td>
                                <td className="w-1/5 flex flex-col">
                                    <p>Rp. {formatTotalPrice}</p>
                                    <p className="text-sm text-softGray">Rp. {e.price} / pcs</p>
                                </td>
                                <td className="w-1/5 flex flex-col">
                                    <p>{e.buyer}</p>
                                    <p className="text-sm text-softGray">
                                        {e.buyerPhoneNumber.replace(
                                            /(\d{4})\D?(\d{4})\D?(\d{4})/,
                                            '$1 $2 $3'
                                        )}
                                    </p>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

CheckoutItem.defaultProps = {};

export default React.memo(CheckoutItem);
