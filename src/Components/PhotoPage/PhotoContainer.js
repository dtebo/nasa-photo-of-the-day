import React from 'react';

import './PhotoPage.css';
import Carousel from './Carousel';

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
        height: "100%"
    }
}));

const PhotoContainer = () => {
    const classes = useStyles();

    return (
        // <StyledPhotoContainer>
        <Grid container
              className={`${classes.root} photo-container`}
              direction="row"
              justify="center"
              alignItems="center">
            <Carousel />
        </Grid>
        // </StyledPhotoContainer>
    )
};

export default PhotoContainer;