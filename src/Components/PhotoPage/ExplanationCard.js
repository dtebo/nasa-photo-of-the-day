import React from 'react';

const ExplanationCard = (props) => {
    return(
        <div className="explanation-wrapper">
            <p>{props.explanation}</p>
        </div>
    )
};

export default ExplanationCard;