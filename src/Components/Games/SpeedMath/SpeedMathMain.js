import React, { useState, useEffect } from 'react'

//Components
import GameSpeedMathQuestion from "./GameSpeedMathQuestion.js"
import { socket } from "../../../Socket/socketEmit.js";
import InGame from '../../SelectGameMenu/InTheGameInfo.js'
import { GameSpeedMathStartGame, GameIsAdmin, GameSpeedMathSubmitAnswer } from "../../../Socket/socketEmit.js";
import GameLoading from "../GameLoading.jsx";

const checkIfIsAdmin = (callback) => {
    console.log("Checking if is Admin");
    GameIsAdmin((data) => {
        console.log(data);
        callback(data);
    });
}

function SpeedMathMain() {
    const [currentState, setCurrentState] = useState(0); // 0 = waiting // 1 = question // 2 = waiting for other // 3 winners
    const [currentQuestion, setCurrentQuestion] = useState(""); //Question = string
    const [correctAnswer, setCorrectAnswer] = useState(0);  // Answer = number
    const [isAdmin, setIsAdmin] = useState(false);
    const [winnerData, setWinnerData] = useState();

    const setAnswer = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target);
        const answer = formData.get("answer");
        console.log(answer);
        const toSend = {
            correctAnswer,
            answer
        }
        event.target.reset();
        //setCurrentState(4);
        GameSpeedMathSubmitAnswer(toSend);
    }

    const startGame = (event) => {
        console.log("KHKSDHGKSJDHGKSDHGKSDHGKHSDGK");
        event.preventDefault();
        const formData = new FormData(event.target);
        const difficulty = formData.get("difficulty");
        console.log(difficulty);
        setCurrentState(4);
        GameSpeedMathStartGame(difficulty);
    }

    checkIfIsAdmin((data) => {
        setIsAdmin(data);
    });

    useEffect(() => {
        socket.on("GameSpeedMathShowQuestion", (data) => {
            //Data = Question,  Question = Problem, answer
            console.log("Showing first quuestion");
            setCurrentState(1);
            console.log(currentState);
            setCurrentQuestion(data.question.problem);
            setCorrectAnswer(data.question.answer);
            console.log(data);
        });
        socket.on("GameSpeedMathHasAnswered", (data) => {
            console.log("Has answered all questions");
            console.log(data);
            setCurrentState(2);
        });
        socket.on("GameSpeedMathNextQuestion", (data) => {
            console.log("Resived netxt question");
            setCurrentState(1);
            setCurrentQuestion(data.problem);
            setCorrectAnswer(data.answer);
            console.log(data);
        });
        socket.on("GameSpeedMathWinners", (data)=>{
            console.log("Resived a winner");
            console.log(data);
            setWinnerData(data);
            setCurrentState(3);
        });
    }, []);

    if (currentState === 0) { // Select difficulty
        if (isAdmin) {
            return (
                <div>
                    <h1>Select Difficulty</h1>
                    <form onSubmit={startGame}>
                        <select name="difficulty">
                            <option value="1">Easy</option>
                            <option value="2">Normal</option>
                            <option value="3">Hard</option>
                        </select>
                        <button>Start the Game</button>
                    </form>
                </div>
            )
        }
        return (
            <InGame />
        )
    }
    if (currentState === 1) { // See question
        return (
            <div>
                <GameSpeedMathQuestion problem={currentQuestion} setAnswer={setAnswer} />
            </div>
        )
    }
    if (currentState === 2) {
        return (
            <div>
                <h1>Waiting</h1>
                <p>Waiting for other players to submit their answers</p>
            </div>
        )
    }
    if(currentState === 3){
        return ( // Other
            <div>
                <div className="GameSMWinners">
                    {winnerData.winners.map((item, index) =>{
                        return(
                            <h1 key={index.toString()}>{item.name}</h1>
                        )
                    })}
                </div>
                <div className="GameSMResults">
                    {winnerData.results.map((item, index)=>{
                        return(
                            <div className="GameSMResultsQuestion" key={index.toString()}>
                                <h1>{item.question.problem}</h1>
                                <p>{item.correctAnswer}</p>
                                <p>{item.myAnswer}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="HomeButton">
                    <button onClick={() => { window.open("https://boringbreak.netlify.app", "_self") }}>HOME</button>
                </div>
            </div>
        )
    }
    return(
        <div>
            <GameLoading/>
        </div>
    )
}

export default SpeedMathMain
