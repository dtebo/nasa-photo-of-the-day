import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div`
    font-family: 'Play', 'Lobster', 'Roboto', Verdana, Geneva, Tahoma, sans-serif;
`;

const Title = () => {
    return (
        <StyledTitle>
            <span className="title">APOD</span>
        </StyledTitle>
    );
};

export default Title;