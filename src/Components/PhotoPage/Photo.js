import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import ExplanationCard from './ExplanationCard';

const StyledPhoto = styled.img`
    height: 680px;
    width: 100%;
`;

const Photo = (props) => {
    const [loading, setLoading] = useState(true);
    // const [source, setSource] = useState("");

    useEffect(() => {
        // if(props.source === source){
        //     setLoading(false);
        // }
        // else{
        //     setLoading(true);
        // }

        // setSource(props.source);

        let img = document.querySelector('.photo img');

        img.addEventListener('load', (e) => {
            img.src = props.source;
        });
    },[props.source]);

    // if(loading) return <h3>Loading...</h3>;

    return (
        <div className="photo">
            <StyledPhoto src={props.source} alt={props.explanation} />
            <ExplanationCard explanation={props.explanation} />
        </div>
    );
};

export default Photo;