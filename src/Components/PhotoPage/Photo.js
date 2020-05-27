import React from 'react';
import styled from 'styled-components';

const StyledPhoto = styled.img`
    height: 680px;
    width: 80%;
    min-width: 500px;
    max-width: 1200px;
`;

const Photo = (props) => {
    return (
        <div className="photo">
            <StyledPhoto src={props.source} alt={props.explanation} />
        </div>
    );
};

export default Photo;