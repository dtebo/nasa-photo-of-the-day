import React from 'react';

const Arrow = (props) => {
    return (
        <div className="arrow" id={props.id} >
            <span>{props.value}</span>
        </div>
    );
};

export default Arrow;