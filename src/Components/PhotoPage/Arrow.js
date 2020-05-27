import React from 'react';
import styled from 'styled-components';

const StyledArrowSpan = styled.span`
    display: inline-block;
    width: 100%;
`;

const Arrow = (props) => {
    return (
        <div className="arrow"
             id={props.id}
             onClick={(e) => props.changeImage(props.id)} >
            <StyledArrowSpan>{props.value}</StyledArrowSpan>
        </div>
    );
};

export default Arrow;