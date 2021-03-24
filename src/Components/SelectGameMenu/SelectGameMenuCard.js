import React from 'react'

import "./SelectGameMenuCard.css";

//Choose Game
import { ChooseGame } from "../../Scripts/SelectGame.js"

function SelectGameMenuCard({ name, imageSrc, imageAlt, index }) {
    function Clicked() {
        console.log(index);
        ChooseGame(index);
    }

    return (
        <div className="Card">
            <h1>{name}</h1>
            <img src={imageSrc} alt={imageAlt} width="100px" />
            <button onClick={() => Clicked()}>Play</button>
        </div>
    )
}

export default SelectGameMenuCard
