
import React, { useEffect } from "react";
import "../commonStyles/currentMusic.css";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
function CurrentMusic(props){
    // function playAudio(){
    //     let audioEI = document.getElementsByClassName("audio-element")[0]
    //     audioEI.play();
    // }
    let _song = props.curSongArr.currentData.song;
    console.log(_song);
    return(
        <div className="currentMusicBox">
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
            <audio 
                className="audio-element"
                controls
                autoPlay>
                <source src={_song}></source>
            </audio>
        </div>
    );
}
export default CurrentMusic;
