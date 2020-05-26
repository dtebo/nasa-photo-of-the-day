import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Photo from './Photo';
import Arrow from './Arrow';

const Carousel = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        // Get our data
        const base_url = "https://api.nasa.gov/planetary/apod";
        let imgDate = new Date();
        let formattedDate = `${imgDate.getFullYear()}-${imgDate.getMonth() + 1}-${imgDate.getDate()}`;

        const API_KEY = "DEMO_KEY";

        // axios.get(`${base_url}?date=${formattedDate}&api_key=${API_KEY}`)
        //      .then((resp) => {
        //         console.log(resp);
        //         setData(resp.data);
        //      });
    }, []);

    return (
        <div className="carousel">
            <Arrow direction="<" />
            <Photo source={data.hdurl} explanation={data.title} />
            <Arrow direction=">" />
        </div>
    );
};

export default Carousel;