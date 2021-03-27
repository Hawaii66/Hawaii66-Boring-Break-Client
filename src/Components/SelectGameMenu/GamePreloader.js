import React from 'react'

//GAMES
import Game1T2L from "../Games/1Truth2LiesGame/Game1Truth2LiesMain.js";
import GameLOM from "../Games/LoveOMeterGame/GameLoveOMeterMain.js";
import GameSpeedMath from "../Games/SpeedMath/SpeedMathMain.js";
import GameSpotifyGuess from "../Games/SpotifyGuessGame/SpotifyGuessMain.jsx";

function GamePreloader({ gameIndex }) {

    if (gameIndex === -1) {
        return (
            <div>
                <p>Error please reload page</p>
            </div>
        )
    }

    if (gameIndex === 0) {
        return (
            <div>
                <Game1T2L />
            </div>
        )
    }
    if (gameIndex === 1) {
        return (
            <div>
                <GameLOM />
            </div>
        )
    }
    if (gameIndex === 2) {
        return (
            <div>
                <GameSpeedMath />
            </div>
        )
    }
    if (gameIndex === 3) {
        return (
            <div>
                <GameSpotifyGuess />
            </div>
        )
    }
}

export default GamePreloader
