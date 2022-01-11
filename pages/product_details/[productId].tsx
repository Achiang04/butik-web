import CardDetails from 'components/Card/CardDetails';
import Footer from 'components/Footer';
import Header from 'components/Header';
import RelatedProduct from 'components/RelatedProduct';
import Tabs from 'components/Tabs';
import React from 'react';

const tabData = [
    {
        id: 1,
        title: 'Description',
        content:
            '1 Varius tempor. Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu infringilla vulputate nunc nec. Dui, massa viverr . More details'
    },
    {
        id: 2,
        title: 'Additional Info',
        content:
            '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam deserunt a minima ullam voluptatibus quis, cumque ad porro omnis delectus laudantium accusamus architecto ea fugiat odio ratione nobis dolorum itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam deserunt a minima ullam voluptatibus quis, cumque ad porro omnis delectus laudantium accusamus architecto ea fugiat odio ratione nobis dolorum itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam deserunt a minima ullam voluptatibus quis, cumque ad porro omnis delectus laudantium accusamus architecto ea fugiat odio ratione nobis dolorum itaque.'
    },
    {
        id: 3,
        title: 'Reviews',
        content:
            '3 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet quos, at alias ea ratione sint voluptatum illum vitae quisquam quis cum! Dicta quae et nostrum. Nobis quis blanditiis aut alias! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet quos, at alias ea ratione sint voluptatum illum vitae quisquam quis cum! Dicta quae et nostrum. Nobis quis blanditiis aut alias! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet quos, at alias ea ratione sint voluptatum illum vitae quisquam quis cum! Dicta quae et nostrum. Nobis quis blanditiis aut alias!'
    },
    {
        id: 4,
        title: 'Video',
        content:
            '4 Lorem ipsum dolor sit amet consectetur adipisicing elit. At molestiae aspernatur quas autem dolores asperiores maxime eaque nobis non minima voluptas, repudiandae impedit est a dolore maiores quo! Modi, voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. At molestiae aspernatur quas autem dolores asperiores maxime eaque nobis non minima voluptas, repudiandae impedit est a dolore maiores quo! Modi, voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. At molestiae aspernatur quas autem dolores asperiores maxime eaque nobis non minima voluptas, repudiandae impedit est a dolore maiores quo! Modi, voluptatum?'
    }
];

const relatedProductData = [
    {
        id: 1,
        title: 'Mens Fashion Wear',
        price: '43.000',
        star: 4,
        img: '/img/RelatedProduct1.png'
    },
    {
        id: 2,
        title: 'Women’s Fashion',
        price: '67.000',
        star: 5,
        img: '/img/RelatedProduct2.png'
    },
    {
        id: 3,
        title: 'Wolx Dummy Fashion',
        price: '67.000',
        star: 4,
        img: '/img/RelatedProduct3.png'
    },
    {
        id: 4,
        title: 'Top Wall Digital Clock',
        price: '41.000',
        star: 3,
        img: '/img/RelatedProduct4.png'
    }
];

const ProductDetails = () => {
    return (
        <>
            <Header />

            <div className="flex flex-col items-center pt-24 mb-20">
                <div className="w-4/6 flex justify-between mt-20">
                    <CardDetails />
                </div>
                <div className="w-full bg-shopDetailBg mt-20 flex justify-center">
                    <div className="w-4/6 py-10">
                        <Tabs tabData={tabData} />
                    </div>
                </div>
                <div className="w-4/6 flex mt-20">
                    <RelatedProduct data={relatedProductData} />
                </div>
            </div>

            <Footer />
        </>
    );
};

ProductDetails.defaultProps = {};

export default React.memo(ProductDetails);
