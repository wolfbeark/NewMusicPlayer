
import React, { useState } from "react";


function ChoicedSinger(props){

    let [onModal, setOnModal] = useState(false);
    let [isClicked, setClicked] = useState(false);
    function changeModal(){
        let _onModal = onModal;
        if(_onModal === false){
            setOnModal(true);
        }else if(_onModal === true){
            setOnModal(false);
        }
        setClicked(true);
    }
    return(
        <div className="choicedSinger__box">
            <div className="choicedSinger__imgbox">
                <img className="choicedSinger--img"
                alt="/"
                src={props.singerData[props.selectedNum].singerImg}
                style={{
                    boxShadow: `0px 0px 30px 20px ${props.singerData[props.selectedNum].imgShadow}`,
                }}
                />
                <div className={onModal 
                ?  "choicedSinger--select-long"
                :  "choicedSinger--select"}
                >
                    <span onClick={changeModal}
                    >
                        Other Singer
                    </span>
                    <div className={
                        onModal 
                        ? "choicedSinger__selectbox"
                        : "choicedSinger__selectbox_off"
                    }
                    style={isClicked
                    ? {visibility: 'visible'}
                    : {visibility: 'hidden'}}
                    >
                        {/* <div onClick={()=>{
                            props.onChangeNum(0)
                        }}>Ed Sheeran</div>
                        <div onClick={()=>{
                            props.onChangeNum(1)
                        }}>Sam Ryder</div>
                        <div>Jason Mraz</div>
                        <div>Adele</div> */}
                        {
                            props.singerData.map((a, i)=>{
                                return(
                                    <div key={i} 
                                    onClick={(e)=>{
                                        props.onChangeNum(i)
                                    }}>
                                        {a.singerName}
                                    </div>
                                );
                            })
                        }
                    </div>
                    {/* { onModal
                    ? <div className="choicedSinger__selectbox">

                    </div>
                    : null}  */}
                </div>
            </div>
                <span
                    style={{
                    fontSize : "3em",
                    fontWeight : "800",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    width: "30em",
                    height: "10%",
                    letterSpacing: "3px",
                    maxWidth: "100%",
                    overflowY: "hidden",
                    zIndex: '2'
                }}
            >
                {props.singerData[props.selectedNum].singerName.toUpperCase()}
            </span>
            <div className="choicedSinger__desc">
                <div>LIKE</div>
                <div>♥ {props.singerData[props.selectedNum].likeCount}</div>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "10%",
                width: "50em",
            }}>
                {
                    props.singerData[props.selectedNum].genre.map((a, i)=>{
                        return(
                        <div 
                            key={i}
                            style={{
                                margin: "0px 5px",
                                backgroundColor: "black",
                                color: "rgba(255, 255, 255, 0.7)",
                                borderRadius: "30px",
                                width: "20%",
                                height: "60%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "1.5em",
                                letterSpacing: "2px",
                                fontWeight: "700",
                                textAlign: "center",
                                border: "none",
                                overflowY: 'hidden'
                            }}    
                        >
                            {a}
                        </div>
                        );
                    })
                }
            </div>
            
        </div>
    );
}

export default ChoicedSinger;