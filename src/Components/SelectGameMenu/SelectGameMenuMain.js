import React from 'react'

import "./SelectGameMenuMain.css";

//Components
import Card from "./SelectGameMenuCard.js";
import InGame from "./InTheGameInfo.js";

function SelectGameMenuMain({ isAdmin }) {

    if (!isAdmin) {
        return (
            <div>
                <InGame />
            </div>
        )
    }

    return (
        <div className="SelectGameMenuDiv">
            <h1>Available Games</h1>
            <div className="AvailableGames">
                <Card
                    name="1 Truth 2 Lies"
                    imageSrc="https://www.thebostoncalendar.com/system/events/photos/000/307/133/original/Untitled.png?1576701591"
                    imageAlt="1 truth 2 lies"
                    index={0}
                />
                <Card
                    name="Love O Meter"
                    imageSrc="https://cdn5.vectorstock.com/i/thumb-large/94/04/love-meter-heart-indicator-day-full-test-vector-29309404.jpg"
                    imageAlt="Love O Meter"
                    index={1}
                />

            </div>
            <div className="Bar"></div>
            <h2>Comming Soon</h2>
            <div className="CommingSoonGames">
                {/*<p>Not working on any game at the moment</p>
                <p>Planned games are: Wiki race and spotifys</p>*/}
                
                <Card
                    name="Speed Math: BETA"
                    imageSrc="https://img2.apksum.com/3e/com.jancy.layagame.math/1.7/icon.png"
                    imageAlt="Speed Math"
                    index={2}
                />
            </div>


        </div>
    )
}

export default SelectGameMenuMain