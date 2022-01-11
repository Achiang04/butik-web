import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import { isNil } from 'ramda';
import React, { useCallback, useState } from 'react';
import Slider from 'react-slick';

const clientReviewData = [
    {
        id: 1,
        img: '/img/client_review1.png',
        title: 'Selina Gomez',
        subtitle: 'Ceo At Webecy Digital',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.'
    },
    {
        id: 2,
        img: '/img/client_review2.png',
        title: 'Selina Gomez',
        subtitle: 'Ceo At Webecy Digital',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.'
    },
    {
        id: 3,
        img: '/img/client_review3.png',
        title: 'Selina Gomez',
        subtitle: 'Ceo At Webecy Digital',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.'
    },
    {
        id: 4,
        img: '/img/client_review1.png',
        title: 'Selina Gomez',
        subtitle: 'Ceo At Webecy Digital',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.'
    },
    {
        id: 5,
        img: '/img/client_review2.png',
        title: 'Selina Gomez',
        subtitle: 'Ceo At Webecy Digital',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.'
    }
];

const iconClasses = 'flex-shrink-0 md:h-8 md:w-8 h-6 w-6';
const iconButtonClasses =
    'absolute top-1/3 z-20 focus:outline-none bg-white border flex flex-1 rounded-full w-10 h-10 md:w-14 md:h-14 items-center justify-center bg-white';

const CarouselComponent = () => {
    const [index, setIndex] = useState(clientReviewData.length > 3 ? 0 : 1);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        // <div className="w-72 bg-red-200">
        //     <Slider {...settings}>
        //         {!isNil(clientReviewData) &&
        //             clientReviewData.map((e, i) => {
        //                 return (
        //                     <div className={clsx('flex w-20', `bg-red-${i + 1}00`)} key={e.id}>
        //                         <p
        //                             className={clsx(
        //                                 index === i && 'text-textPurple font-extrabold'
        //                             )}>
        //                             {e.title}
        //                         </p>
        //                     </div>
        //                 );
        //             })}
        //     </Slider>
        // </div>
        <div></div>
    );
};

CarouselComponent.defaultProps = {};

export default React.memo(CarouselComponent);
