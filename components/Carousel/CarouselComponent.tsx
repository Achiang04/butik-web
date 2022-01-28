import '@egjs/flicking-plugins/dist/flicking-plugins.css';
import '@egjs/flicking-plugins/dist/arrow.css';

import { Arrow } from '@egjs/flicking-plugins';
import Flicking, { ViewportSlot } from '@egjs/react-flicking';
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
// import clsx from 'clsx';
import React from 'react';

// const data = [
//     {
//         id: 1,
//         img: '/img/client_review1.png',
//         title: 'Selina Gomez',
//         subtitle: 'Ceo At Webecy Digital',
//         desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.'
//     },
//     {
//         id: 2,
//         img: '/img/client_review2.png',
//         title: 'Selina Gomez',
//         subtitle: 'Ceo At Webecy Digital',
//         desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.'
//     },
//     {
//         id: 3,
//         img: '/img/client_review3.png',
//         title: 'Selina Gomez',
//         subtitle: 'Ceo At Webecy Digital',
//         desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.'
//     },
//     {
//         id: 4,
//         img: '/img/client_review1.png',
//         title: 'Selina Gomez',
//         subtitle: 'Ceo At Webecy Digital',
//         desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.'
//     },
//     {
//         id: 5,
//         img: '/img/client_review2.png',
//         title: 'Selina Gomez',
//         subtitle: 'Ceo At Webecy Digital',
//         desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.'
//     }
// ];

const CarouselComponent = () => {
    const plugins = [new Arrow()];

    return (
        // <div className="w-72 lg:w-150 bg-red-200 flex">
        //     <Flicking circular={true}>
        //         {data.map((e, i) => {
        //             return (
        //                 <div key={e.id} className={''}>
        //                     <p>{e.title}</p>
        //                     <p>{e.subtitle}</p>
        //                 </div>
        //             );
        //         })}
        //     </Flicking>
        // </div>
        <div className="w-72 bg-red-200">
            <Flicking circular={true} plugins={plugins}>
                <div className="card-panel">1</div>
                <div className="card-panel">2</div>
                <div className="card-panel">3</div>
                <ViewportSlot>
                    <span className="flicking-arrow-prev"></span>
                    <span className="flicking-arrow-next"></span>
                </ViewportSlot>
            </Flicking>
        </div>
    );
};

CarouselComponent.defaultProps = {};

export default React.memo(CarouselComponent);
