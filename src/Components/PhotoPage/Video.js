import React from 'react';

const Video = (props) => {
    return (
        <video src={props.source} controls />
    );
};

export default Video;