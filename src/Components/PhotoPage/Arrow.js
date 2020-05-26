import React from 'react';

const Arrow = (props) => {
    return (
        <div className="arrow">
            <span>{props.direction}</span>
        </div>
    );
};

export default Arrow;