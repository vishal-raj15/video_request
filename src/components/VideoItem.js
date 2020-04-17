import React from 'react';
import './VideoItem.css';

const VideoItem = ({video , onVideoSelect}) => {
        return(
        <div onClick={() => onVideoSelect(video)}className="video-item item"> 
            <img 
                
                className="ui image"
                alt={video.snippet.title}
                src={video.snippet.thumbnails.medium.url} 
                />

            <div className="content">
                <div className="header"> {video.snippet.title}
                <h6>{video.snippet.channelTitle}</h6>
                    <h6>{video.snippet.publishedAt}</h6>
                    </div>
            </div>
        </div>
        )
    
};

export default VideoItem;