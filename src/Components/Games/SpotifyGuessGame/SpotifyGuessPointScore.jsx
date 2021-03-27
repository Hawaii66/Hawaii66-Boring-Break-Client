import React from 'react'

import "./SpotifyGuessPointScore.css"

function SpotifyGuessPointScore({index, clicked, dir}) {

    let changed1 = "🔽";
    if(dir === false){
        changed1 = "▶️"
    }

    let changed2 = "🔼";
    if(dir === false){
        changed2 = "◀️";
    }

    if(index === 0){
        return(
            <div className="SpotifyGuessArrowParent">
                <div className="SpotifyGuessArrow" onClick={()=>{clicked("down", index)}}>{changed1}</div>
            </div>
        )
    }
    if(index === 4){
        return(
            <div className="SpotifyGuessArrowParent">
                <div className="SpotifyGuessArrow" onClick={()=>{clicked("up", index)}}>{changed2}</div>
            </div>
        )
    }

    return(
        <div className="SpotifyGuessArrowParent">
            <div className="SpotifyGuessArrow" onClick={()=>{clicked("up", index)}}>{changed2}</div>
            <div className="SpotifyGuessArrow" onClick={()=>{clicked("down", index)}}>{changed1}</div>
        </div>
    )
}

export default SpotifyGuessPointScore
