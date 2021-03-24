import React from 'react'

//Components
import GameLobbyPlayer from "./GameLobbyPlayer.js";

function GameLobby({ lobby }) {
    return (
        <div className="LobbyHolder" >
            {lobby ? lobby.map((item, index) => {
                console.log(index.toString());
                return (
                    <div key={index.toString()}>
                        <GameLobbyPlayer name={item.name.name} />
                    </div>
                );
            }) : <p>No one is here, please reload the page</p>}
        </div>
    )
}

export default GameLobby