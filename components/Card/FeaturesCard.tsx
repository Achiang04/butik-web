import { isNil } from 'ramda';
import React from 'react';

interface FeatureCardProps {
    img: string;
    title: string;
    desc: string;
}

interface Props {
    data: Array<FeatureCardProps>;
}

const FeaturesCard = ({ data }: Props) => {
    return (
        <div className="flex justify-between w-full">
            {!isNil(data) &&
                data.map((e, i) => {
                    return (
                        <div
                            className="w-64 h-80 bg-white shadow-xl flex flex-col items-center justify-center p-6"
                            key={i}>
                            <img className="w-16 h-16" src={e.img} alt="" />
                            <p className="my-5 text-xl text-textPurple font-semibold">{e.title}</p>
                            <p className="font-medium text-textSoftGray text-base text-center">
                                {e.desc}
                            </p>
                        </div>
                    );
                })}
        </div>
    );
};

FeaturesCard.defaultProps = {};

export default React.memo(FeaturesCard);
