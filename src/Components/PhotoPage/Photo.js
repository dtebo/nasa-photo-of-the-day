import React from 'react';

const Photo = (props) => {
    return (
        <div className="photo">
            <img src={props.source} alt={props.explanation} />
        </div>
    );
};

export default Photo;