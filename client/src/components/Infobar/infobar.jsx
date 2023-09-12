import React from 'react';
import onlineIcon from "../../icons/onlineIcon.png";
import closeIcon from "../../icons/closeIcon.png";
import './infobar.css';

// shows name of room and option to close chat
const InfoBar = ({room}) => {
    return(
        <div className = "infoBar">
            <div className = "leftInnerContainer">
                <img className = "onlineIcon" src = {onlineIcon} alt = "online status" />
                <h3>{room}</h3>
            </div>
            <div className = "rightInnerContainer">
                <a href = "/"><img src = {closeIcon} alt = "close status" /></a>
            </div>
        </div>
    )
}

export default InfoBar;