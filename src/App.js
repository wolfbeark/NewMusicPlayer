/*eslint-disable*/
import { useEffect, useState } from 'react';
import {isMobile} from 'react-device-detect';
import { useHistory } from "react-router-dom";


import './App.css';

import { singerArr } from './SingerData';
import TopNavBar from './commonComponents/TopNavBar';
import ChoicedSinger from './commonComponents/ChoicedSinger';
import ChoicedSinger_Song from './commonComponents/ChoicedSinger_Song';
import CurrentMusic from './commonComponents/CurrentMusic';

function App() {
  let [isPC, setPC] = useState(null);
  let [singerData, setSingerData] = useState([]);
  let [selectedNum, setSelectedNum] = useState(0);
  let [isClickedMusic, setClickedMusic] = useState(false);
  let [currentMusic, setCurrentMusic] = useState({});
  let history = useHistory();
  useEffect(()=>{
    if(isMobile === false){
      setPC(true);
    }
    else if(isMobile === true){
      setPC(false);
      let vh = window.innerHeight * 0.01;
      let vw = window.innerWidth * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
      document.documentElement.style.setProperty("--vw", `${vw}px`);
    }
  },[]);
  useEffect(()=>{
    setSingerData(singerArr);
  }, []);
  
  function onChangeNum(num){
    setSelectedNum(num);
  }
  function onChangeCurrent(num){
    let _curSongArr = {
      currentData : singerData[selectedNum].songArr[num],
      currentSinger : singerData[selectedNum].singerName
    };
      console.log(num);
    setCurrentMusic(_curSongArr);
    console.dir(_curSongArr);
    setClickedMusic(true);
    window.scrollTo(0, 0);
  }
  return (
    <div className={isMobile ? 'm_App' : 'App'}>
      {isPC
      ? (isClickedMusic === false
        ? <div className='pcContainer'>
          <TopNavBar deviceType={isPC}
            isClickedMusic={isClickedMusic}
            style={isClickedMusic === false
            ? {display: 'block'}
            : {display: 'none'}}></TopNavBar>
          <ChoicedSinger 
          singerData={singerData} 
          selectedNum={selectedNum}
          onChangeNum={(num)=>{
            setSelectedNum(num);
          }}
          >
          </ChoicedSinger>
          <ChoicedSinger_Song 
          singerData={singerData} 
          selectedNum={selectedNum}
          currentMusic={onChangeCurrent}
          >
          </ChoicedSinger_Song>
        </div>
        : 
        <div className='pcContainer' >
          <CurrentMusic curSongArr={currentMusic}
            goBack={setClickedMusic}
          >
          </CurrentMusic>
        </div>
        )
      : null}
    </div>
  );
}

export default App;
