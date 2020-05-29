import React from 'react';

const PhotoDay = (props) => {
    return(
        <div className="photo-day">
            <h2>{props.currentDay}</h2>
        </div>
    )
};

export default PhotoDay;