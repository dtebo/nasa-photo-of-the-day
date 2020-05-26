import React from 'react';

import Photo from './Photo';
import Arrow from './Arrow';

const Carousel = () => {
    return (
        <div className="carousel">
            <Arrow direction="<" />
            <Photo />
            <Arrow direction=">" />
        </div>
    );
};

export default Carousel;