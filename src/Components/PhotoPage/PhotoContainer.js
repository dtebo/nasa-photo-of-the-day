import React, {useState} from 'react';
import styled from 'styled-components';

import './PhotoPage.css';
import Carousel from './Carousel';
import PhotoDay from './PhotoDay';

const StyledPhotoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: rgb(231, 231, 231);
`;

const PhotoContainer = () => {
    const [currentDate, setCurrentDate] = useState();

    function getDate(d){
        setCurrentDate(d);
    }

    return (
        <StyledPhotoContainer>
            <PhotoDay currentDate={currentDate} />
            <Carousel getDate={getDate} />
        </StyledPhotoContainer>
    )
};

export default PhotoContainer;