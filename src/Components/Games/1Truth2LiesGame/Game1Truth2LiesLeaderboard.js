import React, { useState } from 'react'

import "./Game1Truth2LiesLeaderboard.css";

function Game1Truth2LiesLeaderboard({ leaderboard, j, wasCorrectOnPrevious, nextQuestion }) {
    const [showNextQuestionButton, setShowNextQuestionButton] = useState(true);

    const nextQuestionClicked = () => {
        console.log("TEST");
        setShowNextQuestionButton(false);
        nextQuestion()
    }

    return (
        <div className="Game1T2LLeaderboardMain">
            {wasCorrectOnPrevious ? <h1 className="Game1T2LLeaderboardCorrect">Correct</h1> : <h1 className="Game1T2LLeaderboardWrong">Wrong</h1>}
            {leaderboard.map((item, index) => {
                if (index === j) {
                    return (
                        <div className="Game1T2LLeaderboardCurrentPlayer" key={index}>
                            <h3>{item.name.name.toString()}</h3>
                            <h4>{item.score.toString()}</h4>
                        </div>

                    )
                } else {
                    return (
                        <div className="Game1T2LLeaderboardOtherPlayer" key={index}>
                            <h3>{item.name.name.toString()}</h3>
                            <h4>{item.score.toString()}</h4>
                        </div>
                    )
                }
            })}
            {showNextQuestionButton ? <button onClick={() => nextQuestionClicked()}>Next Question</button> : null}
        </div>
    )
}

export default Game1Truth2LiesLeaderboard
