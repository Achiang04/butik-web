import { isNil } from 'ramda';
import React from 'react';

const clientReviewData = [
    {
        img: '/img/client_review1.png',
        title: 'Selina Gomez',
        subtitle: 'Ceo At Webecy Digital',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.'
    },
    {
        img: '/img/client_review2.png',
        title: 'Selina Gomez',
        subtitle: 'Ceo At Webecy Digital',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.'
    },
    {
        img: '/img/client_review3.png',
        title: 'Selina Gomez',
        subtitle: 'Ceo At Webecy Digital',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.'
    }
];

const CarouselComponent = () => {
    return (
        <div>
            {!isNil(clientReviewData) &&
                clientReviewData.map((e, i) => {
                    return (
                        <div key={i}>
                            <p>{e.title}</p>
                        </div>
                    );
                })}
        </div>
    );
};

CarouselComponent.defaultProps = {};

export default React.memo(CarouselComponent);
