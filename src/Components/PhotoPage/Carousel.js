import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Photo from './Photo';
import Arrow from './Arrow';

const Carousel = () => {
    const [photoOfTheDay, setPhotoOfTheDay] = useState();

    const base_url = "https://api.nasa.gov/planetary/apod";

    const API_KEY = "xrHz4dfjbuIz8cxMQaT4dcivoMQftq4PJueOxX9s";

    useEffect(() => {
        // Get our data
        let imgDate = new Date();
        let formattedDate = `${imgDate.getFullYear()}-${imgDate.getMonth() + 1}-${imgDate.getDate()}`;

        axios.get(`${base_url}?date=${formattedDate}&api_key=${API_KEY}`)
             .then((resp) => {
                console.log(resp);
                
                setPhotoOfTheDay(resp.data);
             });
    }, []);

    let updatedDate = new Date();
    
    function changeImage(direction){
        if(direction === 'left'){
            updatedDate.setDate(updatedDate.getDate() - 1);
        }
        else{
            updatedDate.setDate(updatedDate.getDate() + 1);
        }

        let dateString = `${updatedDate.getFullYear()}-${updatedDate.getMonth() + 1}-${updatedDate.getDate()}`;

        axios.get(`${base_url}?date=${dateString}&api_key=${API_KEY}`)
                .then((resp) => {
                    console.log(resp);

                    setPhotoOfTheDay(resp.data);
                });
    }

    // If we haven't received our data
    if(!photoOfTheDay) return <h3>Loading...</h3>;

    return (
        <div className="carousel">
            <Arrow id="left" value="<" changeImage={changeImage} />
            <Photo source={photoOfTheDay.url} explanation={photoOfTheDay.title} />
            <Arrow id="right" value=">" changeImage={changeImage} />
        </div>
    );
};

export default Carousel;