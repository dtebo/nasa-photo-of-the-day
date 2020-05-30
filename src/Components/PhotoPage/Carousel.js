import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import axios from 'axios';

import Photo from './Photo';
import PhotoDay from './PhotoDay';
import Video from './Video';
import Arrow from './Arrow';

import { monthsAndNumDays } from './MonthAndNumDays';

const StyledCarousel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const Carousel = (props) => {
    const [photoOfTheDay, setPhotoOfTheDay] = useState();
    const [day, setDay] = useState((new Date().getDate()));
    const [month, setMonth] = useState((new Date().getMonth() + 1));
    const [year, setYear] = useState((new Date().getFullYear()));
    const [imgLoading, setImgLoading] = useState(true);

    let fullDate = `${monthsAndNumDays[month - 1].monthName} ${day}, ${year}`;

    const base_url = "https://api.nasa.gov/planetary/apod";

    const API_KEY = "tgbpmipKwid4tOS5yaeCwSsq0xcqh7nav5MkZWfq";

    useEffect(() => {
        // Get our data
        axios.get(`${base_url}?date=${year}-${month}-${day}&api_key=${API_KEY}`,
                  {headers: {'accept': "application/json", 'X-Content-Type-Options': "nosniff"}})
             .then((resp) => {
                setPhotoOfTheDay(resp.data);
                setImgLoading(false);
             });
    }, [day, month, year]);

    function changeImage(direction){
        let prevUrl = "";

        if(photoOfTheDay.hdurl === prevUrl){
            setImgLoading(false);
        }
        else{
            setImgLoading(true);
        }

        // TODO: Add year traversal and leap year calculation

        if(direction === 'left'){
            if(day !== 1){ // Day of the month can't be less than 1
                setDay(day - 1);
            }
            else{
                // Since we have now fallen into another month,
                // set the number of days to the number of days
                // in the previous month.
                if(month !== 1){
                    setMonth(month - 1);

                    let endOfPrevMonth = monthsAndNumDays[month - 2].numDays; // Current month's last day

                    setDay(endOfPrevMonth);
                }
                else{
                    // Since we have now fallen into another year,
                    // set the month to the last month of the year
                    // and the days to the number of days in the
                    // last month of the previous year.
                    setYear(year - 1);

                    setMonth(12);

                    let endOfPrevMonth = monthsAndNumDays[month - 2].numDays;

                    setDay(endOfPrevMonth);
                }
            }
        }
        else if(direction === 'right'){
            let today = new Date();

            // Prevent from trying to navigate to future dates
            if(day < today.getDate()){
                setDay(day + 1);
            }
        }

        // Make the current url the previous url
        prevUrl = photoOfTheDay.url;
    }

    // If we haven't received our data
    if(!photoOfTheDay || imgLoading) return <h3>Loading...</h3>;

    return (
        <div>
            <PhotoDay currentDay={fullDate} />
            <StyledCarousel>
                <Arrow id="left" value="<" changeImage={changeImage} />
                {photoOfTheDay.media_type === 'video' ? <Video source={photoOfTheDay.url} /> : <Photo source={photoOfTheDay.hdurl} explanation={photoOfTheDay.title} />}
                <Arrow id="right" value=">" changeImage={changeImage} />
            </StyledCarousel>
        </div>
    );
};

export default Carousel;