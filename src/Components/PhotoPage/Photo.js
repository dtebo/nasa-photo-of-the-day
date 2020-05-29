import React from 'react';
import styled from 'styled-components';

import ExplanationCard from './ExplanationCard';

const StyledPhoto = styled.img`
    height: 680px;
    width: 100%;
`;

const Photo = (props) => {
    return (
        <div className="photo">
            <StyledPhoto src={props.source} alt={props.explanation} />
            <ExplanationCard explanation={props.explanation} />
        </div>
    );
};

export default Photo;