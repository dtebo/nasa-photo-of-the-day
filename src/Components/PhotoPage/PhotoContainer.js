import React from 'react';
import styled from 'styled-components';

import './PhotoPage.css';
import Carousel from './Carousel';


const StyledPhotoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100% - 96px);
    background-color: rgb(231, 231, 231);
`;

const PhotoContainer = () => {
    return (
        <StyledPhotoContainer>
            <Carousel />
        </StyledPhotoContainer>
    )
};

export default PhotoContainer;