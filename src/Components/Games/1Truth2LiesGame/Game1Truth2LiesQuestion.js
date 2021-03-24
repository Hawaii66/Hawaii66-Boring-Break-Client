import React, { useState } from 'react'

import "./Game1Truth2LiesQuestion.css";

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return (array);
}

function IndexToName(index, question) {
    if (index === 1) {
        return question.t;
    }
    if (index === 2) {
        return question.l1;
    }
    if (index === 3) {
        return question.l2;
    }
}

function Game1Truth2LiesQuestion({ name, questions, clickedOnQuestion }) {
    const [hasAnswered, setHasAnswered] = useState(false);

    const onQuestionClick = (index) => {
        setHasAnswered(true);
        clickedOnQuestion(index);
    }

    let randomIndexes = shuffleArray([1, 2, 3]);

    let newQuestions = [];
    newQuestions.push(IndexToName(randomIndexes[0], questions));
    newQuestions.push(IndexToName(randomIndexes[1], questions));
    newQuestions.push(IndexToName(randomIndexes[2], questions));
    console.log(newQuestions);

    if (hasAnswered === true) {
        return (
            <div className="Game1T2LHasAnswerdQuestion">
                <p>Waiting for other players answers</p>
            </div>
        )
    }
    return (
        <div className="Game1T2LQuestionsMain">
            <h1>{name}</h1>
            <div className="Game1T2LQuestions">
                <div className="Game1T2LQuestion" onClick={() => onQuestionClick(randomIndexes[0] - 1)}>
                    <h2>{newQuestions[0]}</h2>
                </div>
                <div className="Game1T2LQuestion" onClick={() => onQuestionClick(randomIndexes[1] - 1)}>
                    <h2>{newQuestions[1]}</h2>
                </div>
                <div className="Game1T2LQuestion" onClick={() => onQuestionClick(randomIndexes[2] - 1)}>
                    <h2>{newQuestions[2]}</h2>
                </div>
            </div>
            <p>Select the one you think is the truth</p>
        </div>
    )
}

export default Game1Truth2LiesQuestion
