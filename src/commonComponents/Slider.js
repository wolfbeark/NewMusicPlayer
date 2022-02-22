
import React, { useState, useEffect, useRef } from "react";

function Slider({onChange, percentage}){
    let [position, setPosition] = useState(0);
    let [marginLeft, setMarginLeft] = useState(0);
    const [progressBarWidth, setProgressBarWidth] = useState(0);

    const rangeRef = useRef()
    const thumbRef = useRef()
    useEffect(()=>{
        const rangeWidth = rangeRef.current.getBoundingClientRect().width;
        const thumbWidth = thumbRef.current.getBoundingClientRect().width;;
        const centerThumb = (thumbWidth / 100) * percentage * -1;
        const centerProgressBar = thumbWidth + rangeWidth/100 * percentage - (thumbWidth/100 * percentage);
        setMarginLeft(centerThumb);
        setPosition(percentage);
        setProgressBarWidth(centerProgressBar);
    }, [percentage])
    return(
        <div className="slider-container">
            <div className="progress-bar-cover" style={{
                width: `${progressBarWidth}px`,
            }}></div>
            <div className="thumb" ref={thumbRef} style={{
                left: `${position}%`,
                marginLeft: `${marginLeft}px`
            }}></div>
            <input className="range" ref={rangeRef} type='range' step='0.01' onChange={onChange}/>
        </div>

    );
}
export default Slider;