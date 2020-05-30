import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import ExplanationCard from './ExplanationCard';

const StyledPhoto = styled.img`
    height: 680px;
    width: 100%;
`;

const Photo = (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
    },[props.source]);

    return (
        <div className="photo">
            <StyledPhoto src={props.source} alt={props.explanation} />
            <ExplanationCard explanation={props.explanation} />
        </div>
    );
};

export default Photo;