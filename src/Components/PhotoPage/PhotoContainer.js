import React, {useState} from 'react';
import styled from 'styled-components';

import './PhotoPage.css';
import Carousel from './Carousel';
import PhotoDay from './PhotoDay';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';

// const StyledPhotoContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     height: 100%;
//     background-color: rgb(231, 231, 231);
// `;

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '20px'
    }
}));

const PhotoContainer = () => {
    const classes = useStyles();

    const [currentDate, setCurrentDate] = useState();

    function getDate(d){
        setCurrentDate(d);
    }

    return (
        // <StyledPhotoContainer>
        <Grid container
              className={classes.root}
              direction="row"
              justify="center"
              alignItems="center">
            
            <PhotoDay currentDate={currentDate} />
            <Carousel getDate={getDate} />
        </Grid>
        // </StyledPhotoContainer>
    )
};

export default PhotoContainer;