import React, { useEffect, useState } from 'react'

//Components
import Game1Truth2LiesSelectOptions from "./Game1Truth2LiesSelectOptions.js"
import GameLobby from "../GameLobby.js";
import { socket } from "../../../Socket/socketEmit.js";
import Game1Truth2LiesQuestion from "./Game1Truth2LiesQuestion.js";
import Game1Truth2LiesLeaderboard from "./Game1Truth2LiesLeaderboard.js";
import Game1Truth2LiesWinners from "./Game1Truth2LiesWinners.js";

let wasCorrectOnPrevious = false;

function HasEnteredInAnswer(index) {
    console.log(index);
    socket.emit("2T1LSubmitAnswer", index, (data) => {
        console.log(data);
        wasCorrectOnPrevious = true;
        console.log("_---------------------");
    });
}


function Game1Truth2Lies() {
    const [currentState, setCurrentState] = useState(0); //0 = choises, 1 = lobby, 2 = questions, 3 = leaderboard, 4 = winners
    const [lobby, setLobby] = useState();
    const [currentQuestion, setCurrentQuestion] = useState();
    const [currentLeaderboardStats, setCurrentLeaderboardStats] = useState();
    const [currentWinners, setCurrentWinners] = useState();

    const NextQuestion = () => {
        console.log("WHAY");
        socket.emit("1T2LNextQuestion");
    }

    useEffect(() => {
        socket.on("UpdatePlayerLobby", (lobby) => {
            console.log("TEST");
            //setShowCurrentGame(true);
            setLobby(lobby);
        });
        socket.on("Show1T2LQuestion", (data) => {
            console.log(data);
            setCurrentQuestion(data);
            setCurrentState(2);
        });
        socket.on("Show1T2LLeaderboard", (leaderboard, j, lastPlayerWasCorrect) => {
            const toPush = {
                leaderboard: leaderboard,
                j: j,
                wasCorrectOnPrevious: wasCorrectOnPrevious,
            }
            setCurrentLeaderboardStats(toPush);
            setCurrentState(3);
        });
        socket.on("2T1LWinners", (data) => {
            console.log(data);
            setCurrentWinners(data);
            setCurrentState(4);
        });
    }, []);

    if (currentState === 0) {
        return (
            <div>
                <Game1Truth2LiesSelectOptions hideOptions={setCurrentState} />
            </div>
        );
    } else if (currentState === 1) {
        return (
            <div>
                <GameLobby lobby={lobby} />
            </div>
        )
    } else if (currentState === 2) {
        return (
            <div>
                <Game1Truth2LiesQuestion name={currentQuestion.name.name} questions={currentQuestion.questions} clickedOnQuestion={HasEnteredInAnswer} />
            </div>
        )
    } else if (currentState === 3) {
        return (
            <div>
                <Game1Truth2LiesLeaderboard leaderboard={currentLeaderboardStats.leaderboard} j={currentLeaderboardStats.j} wasCorrectOnPrevious={currentLeaderboardStats.wasCorrectOnPrevious} nextQuestion={NextQuestion} />
            </div>
        )
    } else if (currentState === 4) {
        return (
            <div>
                <Game1Truth2LiesWinners data={currentWinners} />
            </div>
        )
    }
    /*
        return (
            <div >
                {}
                {currentState ? <GameLobby lobby={lobby} /> : <Game1Truth2LiesSelectOptions hideOptions={setCurrentState} />}
            </div>
        )*/
}

export default Game1Truth2Lies