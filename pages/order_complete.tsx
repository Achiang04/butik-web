import Footer from 'components/Footer';
import Header from 'components/Header';
import { useRouter } from 'next/dist/client/router';
import React, { useCallback } from 'react';

const OrderComplete = () => {
    const router = useRouter();

    const handleContinueShopping = useCallback(() => {
        router.push('/product');
    }, []);

    return (
        <>
            <Header />

            <div className="flex flex-col items-center py-24">
                <div className="w-4/6 mt-20 flex">
                    <div className="flex flex-col items-center mb-20 z-20">
                        <div className="flex items-center justify-center mb-8">
                            <img
                                className="h-20 w-87"
                                src="/img/checklist_background.png"
                                alt="background"
                            />
                            <div className="absolute flex items-center justify-center bg-white rounded-full w-16 h-16">
                                <img className="w-10 h-10" src="/img/checklist.png" alt="icon" />
                            </div>
                        </div>
                        <p className="text-4xl text-relatedText">Your Order Is Completed!</p>
                        <p className="w-1/2 text-center mt-7 text-base font-bold text-textOrderCompleted">
                            Thank you for your order! Your order is being processed and will be
                            completed within 3-6 hours. You will receive an email confirmation when
                            your order is completed.
                        </p>
                        <button
                            type="button"
                            onClick={handleContinueShopping}
                            className="py-4 px-9 rounded bg-pink text-white text-base font-bold mt-7">
                            Continue Shopping
                        </button>
                    </div>
                    <img
                        className="absolute mb w-4/6 h-110"
                        src="/img/order_completed.png"
                        alt="icon"
                    />
                </div>
            </div>

            <Footer />
        </>
    );
};

export default React.memo(OrderComplete);
