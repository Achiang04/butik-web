import CartList from 'components/Cart/CartList';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { useRouter } from 'next/dist/client/router';
import { isNil } from 'ramda';
import React, { useCallback, useMemo, useState } from 'react';

const productData = [
    {
        id: 1,
        img: '/img/cart1.png',
        title: 'Ut diam consequat',
        color: 'Brown',
        size: 'XL',
        price: '32.000',
        quantity: 1
    },
    {
        id: 2,
        img: '/img/cart2.png',
        title: 'Vel faucibus posuere',
        color: 'Brown',
        size: 'XL',
        price: '32.000',
        quantity: 1
    },
    {
        id: 3,
        img: '/img/cart3.png',
        title: 'Ac vitae vestibulum',
        color: 'Brown',
        size: 'XL',
        price: '32.000',
        quantity: 1
    },
    {
        id: 4,
        img: '/img/cart4.png',
        title: 'Elit massa diam',
        color: 'Brown',
        size: 'XL',
        price: '32.000',
        quantity: 1
    },
    {
        id: 5,
        img: '/img/cart5.png',
        title: 'Proin pharetra elementum',
        color: 'Brown',
        size: 'XL',
        price: '32.000',
        quantity: 1
    }
];

const Cart = () => {
    const router = useRouter();
    const [curtData, setCurtData] = useState(productData);

    const handleOrderComplete = useCallback(() => {
        router.push('/order_complete');
    }, []);

    const handleClearCurt = useCallback(() => {
        setCurtData([]);
    }, []);

    const handlePlusQuantity = useCallback(
        (id) => {
            const temp = curtData.find((e) => e.id === id);
            const tempIndex = curtData.findIndex((e) => e.id === id);
            const newData = { ...temp, quantity: temp.quantity + 1 };
            const newCurtData = [...curtData];
            newCurtData[tempIndex] = newData;
            setCurtData(newCurtData);
        },
        [curtData]
    );

    const handleMinesQuantity = useCallback(
        (id) => {
            const temp = curtData.find((e) => e.id === id);
            const tempIndex = curtData.findIndex((e) => e.id === id);
            if (temp.quantity !== 1) {
                const newData = { ...temp, quantity: temp.quantity - 1 };
                const newCurtData = [...curtData];
                newCurtData[tempIndex] = newData;
                setCurtData(newCurtData);
            }
        },
        [curtData]
    );

    const renderEmpty = useMemo(() => {
        return (
            curtData.length === 0 && (
                <div className="flex justify-center text-textPriceCartPurple">
                    <p className="text-lg ">Data Empty</p>
                </div>
            )
        );
    }, [curtData]);

    const renderPrice = useMemo(() => {
        const priceData = curtData.map((e) => parseInt(e.price) * e.quantity * 1000);
        const totalPrice = priceData
            .reduce((a, b) => a + b, 0)
            .toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '.');

        return (
            <>
                <div className="pb-1 border-b border-proceedBorder flex justify-between">
                    <p className="text-lg font-semibold text-textDarkPurple">Subtotals:</p>
                    <p className="text-base text-textPriceCartPurple">Rp.{totalPrice}</p>
                </div>
                <div className="border-b border-proceedBorder flex justify-between mt-8">
                    <p className="pb-1  text-lg font-semibold text-textDarkPurple">Totals:</p>
                    <p className="text-base text-textPriceCartPurple">Rp.{totalPrice}</p>
                </div>
            </>
        );
    }, [curtData]);

    return (
        <>
            <Header />
            <div className="flex flex-col items-center py-24">
                <div className="w-4/6 mt-20">
                    <div className="flex">
                        <div className="w-70p">
                            <table className="w-full">
                                <thead>
                                    <tr className="flex text-xl text-textDarkPurple mb-10">
                                        <th className="w-2/5 flex">Product</th>
                                        <th className="w-1/5 flex">Price</th>
                                        <th className="w-1/5 flex">Quantity</th>
                                        <th className="w-1/5 flex">Total</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {!isNil(curtData) &&
                                        curtData.map((e, i) => {
                                            return (
                                                <CartList
                                                    id={e.id}
                                                    title={e.title}
                                                    img={e.img}
                                                    color={e.color}
                                                    size={e.size}
                                                    price={e.price}
                                                    quantity={e.quantity}
                                                    key={i}
                                                    handlePlusQuantity={handlePlusQuantity}
                                                    handleMinesQuantity={handleMinesQuantity}
                                                />
                                            );
                                        })}
                                </tbody>
                            </table>
                            {renderEmpty}
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={handleClearCurt}
                                    className="px-7 py-3 bg-pink text-white rounded text-sm font-bold mt-8">
                                    Clear Curt
                                </button>
                            </div>
                        </div>
                        <div className="w-30p ml-20">
                            <div>
                                <p className="text-xl text-textDarkPurple flex justify-center font-bold">
                                    Cart Totals
                                </p>
                                <div className="p-8 bg-proceedBg mt-10">
                                    {renderPrice}
                                    <button
                                        type="button"
                                        onClick={handleOrderComplete}
                                        className="w-full py-3 mt-8 bg-proceedButton text-white text-sm rounded font-bold">
                                        Proceed To Checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

Cart.defaultProps = {};

export default React.memo(Cart);
