import { isNil } from 'ramda';
import React from 'react';

interface ProductData {
    id: number;
    title: string;
    price: string;
    star: number;
    img: string;
}

interface Props {
    data: Array<ProductData>;
}

const RelatedProducts = ({ data }: Props) => {
    return (
        <div className="w-full">
            <p className="text-relatedText text-4xl font-bold mb-10">Related Products</p>
            <div className="flex justify-between">
                {!isNil(data) &&
                    data.map((e) => {
                        return (
                            <div key={e.id} className="">
                                <img className="w-72 h-96" src={e.img} alt="relatedImage" />
                                <div className="flex justify-between">
                                    <div>
                                        <p className="text-textPurple font-medium mt-3 text-base">
                                            {e.title}
                                        </p>
                                        <p className="text-sm text-textPurple mt-1">Rp.{e.price}</p>
                                    </div>
                                    <div className="flex mt-4.5">
                                        {Array(+e.star)
                                            .fill('')
                                            .map((e, i) => (
                                                <img
                                                    key={i}
                                                    className="w-3 h-3"
                                                    src="/img/star_icon.png"
                                                    alt="icon"
                                                />
                                            ))}
                                        {5 - e.star !== 0 &&
                                            Array(5 - e.star)
                                                .fill('')
                                                .map((e, i) => (
                                                    <img
                                                        key={i}
                                                        className="w-3 h-3"
                                                        src="/img/star_icon_brown.png"
                                                        alt="icon"
                                                    />
                                                ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

RelatedProducts.defaultProps = {};

export default React.memo(RelatedProducts);
