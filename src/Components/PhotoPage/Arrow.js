import React from 'react';

const Arrow = (props) => {
    return (
        <div className="arrow"
             id={props.id}
             onClick={(e) => props.changeImage(props.id)} >
            <span>{props.value}</span>
        </div>
    );
};

export default Arrow;