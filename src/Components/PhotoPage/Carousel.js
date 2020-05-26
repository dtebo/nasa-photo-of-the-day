import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Photo from './Photo';
import Arrow from './Arrow';

const Carousel = () => {
    const [photoOfTheDay, setPhotoOfTheDay] = useState();

    useEffect(() => {
        // Get our data
        const base_url = "https://api.nasa.gov/planetary/apod";
        let imgDate = new Date();
        let formattedDate = `${imgDate.getFullYear()}-${imgDate.getMonth() + 1}-${imgDate.getDate()}`;

        const API_KEY = "DEMO_KEY";

        axios.get(`${base_url}?date=${formattedDate}&api_key=${API_KEY}`)
             .then((resp) => {
                console.log(resp);
                
                setPhotoOfTheDay(resp.data);
             });
    }, []);

    // If we haven't received our data
    if(!photoOfTheDay) return <h3>Loading...</h3>;

    return (
        <div className="carousel">
            <Arrow direction="<" />
            <Photo source={photoOfTheDay.url} explanation={photoOfTheDay.title} />
            <Arrow direction=">" />
        </div>
    );
};

export default Carousel;