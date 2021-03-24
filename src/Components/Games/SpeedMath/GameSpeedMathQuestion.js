import React from 'react'

function GameSpeedMathQuestion({ problem, setAnswer }) {
    return (
        <div>
            <h1>Enter the answer to the problem</h1>
            <h2>{problem}</h2>
            <form onSubmit={setAnswer}>
                <input name="answer" type="number" placeholder="Answer"></input>
                <button>Submit Answer</button>
            </form>
        </div>
    )
}

export default GameSpeedMathQuestion
