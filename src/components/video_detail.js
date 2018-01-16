import React from 'react';


const VideoDetail = ({video}) => {
    // this runs when a video is not loaded. 
    if (!video) {
        return <div> LOADING YOUR VIDEO </div>;
    };

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}>
                </iframe>
            </div>
            <div className="details">
                <div> {video.snippet.title} </div>
                <div> {video.snippet.description} </div>
                <div> </div>
            </div>
        </div>
    )
};

export default VideoDetail;

