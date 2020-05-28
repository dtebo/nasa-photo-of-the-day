import React from 'react';

import ReactPlayer from 'react-player';

const Video = (props) => {
    return (
        <div className="video-container">
            <ReactPlayer url={props.source} />
        </div>
    );
};

export default Video;