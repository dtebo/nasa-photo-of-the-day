import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import ExplanationCard from './ExplanationCard';

const StyledPhoto = styled.img`
    height: 680px;
    width: 100%;
`;

const Photo = (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const img = document.querySelector('.photo img');

        img.style.display = "none";

        img.addEventListener('load', (e) => {
            img.style.display = "inline-block";
            setLoading(false);
        });
    }, []);

    return (
        <div className="photo">
            {loading ? <h3>Loading...</h3> : null}
            <StyledPhoto src={props.source} alt={props.explanation} />
            <ExplanationCard explanation={props.explanation} />
        </div>
    );
};

export default Photo;