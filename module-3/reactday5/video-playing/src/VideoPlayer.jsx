import React from 'react'
import { useRef } from 'react';
function VideoPlayer(){
    const videoRef = useRef(null);
    const handlePlay = () => {
        videoRef.current.play();
    };
    const handlePause = () => {
        videoRef.current.pause();
    };
    const handleForward = () => {
        videoRef.current.currentTime += 5;
    };
    const handleRewind = () => {
        videoRef.current.currentTime -= 5;
    };


  return (
    <div style={{textAlign: 'center', marginTop: '20px'}}>
        <h1>VIDEO PLAYER</h1>
        <video ref={videoRef} width={400} src="https://www.w3schools.com/html/mov_bbb.mp4"/>

        <div style={{ marginTop: "10px" }}>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleForward}>Forward 5s</button>
        <button onClick={handleRewind}>Rewind 5s</button>
      </div>
    </div>
  )
}

export default VideoPlayer