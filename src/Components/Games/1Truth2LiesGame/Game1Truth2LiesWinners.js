import React from 'react'

import "./Game1Truth2LiesWinners.css";

function Game1Truth2LiesWinners({ data }) {

    const GenerateH1 = (data) => {

        let temp = "Winners:"

        if (data.winners.length === 1) {
            temp = "Winner:"
        }

        return (
            <h1>{temp}</h1>
        )
    }

    return (
        <div className="Winners">
            {GenerateH1(data)}
            <div className="Game1T2LWinners">
                {data.winners.map((item, index) => {
                    return (
                        <div key={index.toString()}>
                            <h2>{item.name}: {item.score}</h2>
                        </div>
                    )
                })}
            </div>
            <div className="HomeButton">
                <button onClick={() => { window.open("https://server-question-game.herokuapp.com/", "_self") }}>HOME</button>
            </div>
        </div>
    )
}

export default Game1Truth2LiesWinners
