import React, {useState, useEffect} from 'react';

import Carousel from './Carousel';

const PhotoContainer = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Get our data
    }, []);

    return (
        <div className="photo-container">
            <Carousel />
        </div>
    )
};

export default PhotoContainer;