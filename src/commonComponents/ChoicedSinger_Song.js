
import React from "react";
import { Link } from 'react-router-dom';


function ChoicedSinger_Song(props){
    return(
        <div className="choicedSinger_song">
            <ul className="songList">
                {
                    props.singerData[props.selectedNum].songArr.map((a, i)=>{
                        return(
                        <Link className="songList--item"
                             key={i} to={"/CurrentMusic"}>
                            <li key={i}
                            style={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                width: '100%',
                                height: '100%'
                            }}
                            onClick={()=>{
                                props.currentMusic(i);
                            }}
                        >
                            <img className="songImg"
                                style={{
                                    boxShadow: `0px 0px 15px 5px ${a.songImgShadow}`,
                                    marginRight: '10px'
                                }}
                                src={a.songImg}
                                alt="/"
                            >
                            </img>
                            <div className="songInfo">
                                <div style={{
            
                                }}>
                                    {a.songName}
                                </div>
                                <span>
                                    {props.singerData[props.selectedNum].singerName}
                                </span>
                            </div>
                            <div className="songLikeCount">
                                <span>
                                    ♥
                                </span>
                                <span>
                                    {a.songLikeCount}
                                </span>
                            </div>
                        </li>
                        </Link>
                        
                        );
                    })
                }
            </ul>
            {/* <Route path={"/CurrentMusic"}>
                <CurrentMusic></CurrentMusic>
            </Route> */}
        </div>
    );
}

export default ChoicedSinger_Song;