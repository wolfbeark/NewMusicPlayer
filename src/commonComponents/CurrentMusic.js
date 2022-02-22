
import React, { useState, useRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import 'react-h5-audio-player/lib/styles.css';
import "../commonStyles/currentMusic.css";
import Slider from "./Slider";


function CurrentMusic(props){
    let [percentage, setPercentage] = useState(0);
    let [isPlaying, setIsPlaying] = useState(false);
    let [duration, setDuration] = useState(0);
    let [currentTime, setCurrentTime] = useState(0);

    let onChange = (e) =>{
        const audio = audioRef.current;
        audio.currentTime = (audio.duration / 100) * e.target.value;
        setPercentage(e.target.value);
    }
    let audioRef = useRef();
    let play = () => {
        let audio = audioRef.current
        //audio.volume = 0.1;

        if(!isPlaying){
            setIsPlaying(true);
            audio.play();
        }

        if(isPlaying){
            setIsPlaying(false);
            audio.pause();
        }
    }
    let getCurrentDuration = (e) => {
        const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2);
        const time = e.currentTarget.currentTime;

        setPercentage(+percent);
        setCurrentTime(time.toFixed(2));
    }
    console.dir(audioRef.current);
    return(
        <div className="currentMusicBox"
        >
            <div className="currentImg">
                <img className="currentImg--img"
                    src={props.curSongArr.currentData.songImg}
                    alt={'/'}
                    style={{
                        boxShadow: `0px 0px 30px 10px ${props.curSongArr.currentData.songImgShadow}`,
                    }}
                >
                </img>
            </div>
            <div className="previous_btn"
                onClick={()=>{
                    props.goBack(false);
                }}
            >
                    Previous Page
            </div>
            <span className="current__songName">
                {props.curSongArr.currentData.songName}
            </span>
            <span className="current__singerName">
                {props.curSongArr.currentSinger}
            </span>
            {/* <div className="song-slider">
                <input type='range' defaultValue='0' className='seek-bar'/>
                <div className="song-timeText">
                    <span className="current-time">00:00</span>
                    <span className="song-duration">00:00</span>
                </div>
            </div>
            <div className="song-controls">
                    <button 
                        className={'songPlay-btns' + 
                        ` ${isActPlay ? 'pause' : null}`} 
                        onClick={changePlayBtn}
                    >
                        <span></span>
                        <span></span>
                    </button>
            </div> */}
            <Slider 
                onChange={onChange} 
                percentage={percentage} 
            >
            </Slider>
            <audio 
                ref={audioRef} 
                src={process.env.PUBLIC_URL + props.curSongArr.currentData.song} 
                onLoadedData={(e) => {
                    setDuration(e.currentTarget.duration.toFixed(2));
                }}
                onTimeUpdate={getCurrentDuration}
                >
            </audio>
            <div className="song-controls">
                    <button 
                        className={'songPlay-btns' + 
                        ` ${!isPlaying ? 'pause' : null}`} 
                        onClick={play}
                    >
                        <span></span>
                        <span></span>
                    </button>
            </div>
            {/* <div className="Sound">
                <AudioPlayer 
                    autoPlay
                    layout="horizontal"
                    customAdditionalControls={[]}
                    volume='0.5'
                    src={process.env.PUBLIC_URL + props.curSongArr.currentData.song}>
                </AudioPlayer>
            </div> */}
        </div>
    );
}

export default CurrentMusic;
