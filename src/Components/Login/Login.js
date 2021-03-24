import React from 'react'
import "./Login.css";

function Login({ onSubmit, onChangeName, onChangePin, createServer, currentPin }) {
    return (
        <div className="LoginTab">
            <h1 className="LoginHeader">In between class 🎮</h1>
            <form id="LoginForm" onSubmit={onSubmit}>
                <input type="text" name="LoginInputName" id="LoginInputName" onChange={onChangeName} placeholder="Username" />
                <input type="number" name="LoginInputPin" id="LoginInputPin" onChange={onChangePin} placeholder="Game Pin" />
                <button className="LoginEnterButton" >Enter Game</button>
            </form>
            <button onClick={createServer}>Create Server</button>
            {currentPin ? <h1 className="GAMEPIN">{currentPin}</h1> : null}
        </div>
    )
}

export default Login