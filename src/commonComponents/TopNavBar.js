
import React, { memo ,useState } from "react";

function TopNavBar(props){

    return(
        <div className="topNavBar__Box">
            <div className={
                `${props.deviceType 
                ? 'topNavBar'
                : 'm_topNavBar'}
                cmTopNavBar`
                }>
                <div className="topNavSubMenu">
                    <span>Test-Page</span>
                    <span>
                        Theme - Music
                    </span>
                </div>
                <Clock></Clock>
            </div>
        </div>
        
    );
    function Clock(){
        let [date, setDate] = useState(new Date());
        function setNewDate(){
            let _date = new Date();
            setDate(_date)
        }
        setInterval(setNewDate, 1000);
        return(
            <span>
                {date.toLocaleTimeString(
                    'en-us',
                    {hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit"
                    }
                 )}
            </span>
        );
    }
}
export default  memo(TopNavBar);