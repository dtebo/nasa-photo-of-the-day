import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import axios from 'axios';

import Photo from './Photo';
import Arrow from './Arrow';

const StyledCarousel = styled.div`
    width: 90%;
`;

const Carousel = () => {
    const [photoOfTheDay, setPhotoOfTheDay] = useState();
    const [day, setDay] = useState((new Date().getDate()));

    const base_url = "https://api.nasa.gov/planetary/apod";

    const API_KEY = "xrHz4dfjbuIz8cxMQaT4dcivoMQftq4PJueOxX9s";

    useEffect(() => {
        // Get our data
        axios.get(`${base_url}?date=2020-05-${day}&api_key=${API_KEY}`)
             .then((resp) => {
                // console.log(resp);
                
                setPhotoOfTheDay(resp.data);
             });
    }, [day]);

    function changeImage(direction){
        if(direction === 'left'){
            setDay(day - 1);
        }
        else if(direction === 'right'){
            let today = new Date();

            // Prevent from trying to navigate to future dates
            if(day < today.getDate()){
                setDay(day + 1);
            }
        }
    }

    // If we haven't received our data
    if(!photoOfTheDay) return <h3>Loading...</h3>;

    return (
        <StyledCarousel>
            <Arrow id="left" value="<" changeImage={changeImage} />
            <Photo source={photoOfTheDay.url} explanation={photoOfTheDay.title} />
            <Arrow id="right" value=">" changeImage={changeImage} />
        </StyledCarousel>
    );
};

export default Carousel;