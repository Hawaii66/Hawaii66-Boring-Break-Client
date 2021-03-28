import React, {useState, useEffect} from 'react'

import { socket } from "../../../Socket/socketEmit.js"

import SpotifyGuessPointScore from "./SpotifyGuessPointScore.jsx";

import "./SpotifyGuessMain.css";

function SpotifyGuessMain() {
    const [spotifyTracks, setSpotifyTracks] = useState();
    const [sortedSpotifyTracks, setSortedSpotifyTracks] = useState("");
    const [spotifyTracksIframe, setSpotifyTracksIframe] = useState("");
    const [spotifyTracksDir, setSpotifyTracksDir] = useState(false);
    const [iFrameSize, setIframeSize] = useState("80");

    useEffect(()=>{
        const toSend = {
            country: "Sweden",
        }

        socket.emit("GameSpotifyGuessStartGame", toSend);

        socket.on("GameSpotifyGuessResSongs", (data)=>{
            console.log(data);
            setSpotifyTracks(data);
            setSortedSpotifyTracks(data);
            console.log(spotifyTracks);
            console.log(data);
            
            createIframes(data, "380");
        })
    }, []);

    const createIframes = (data, h)=>{
        let newList = [];
        data.map((item, index)=>{
            const url = "https://open.spotify.com/embed/track/" + item.track.id.toString();
            let toAdd = {
                frame:<iframe className="SpotifySongIframe" src={url} width="300" height={h} frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            }

            newList.push(toAdd);
        })
        setSpotifyTracksIframe(newList);
        console.log(spotifyTracksIframe);
    }

    const sortIframes = (height) => {
        console.log("HFDJSFDKJSHFDSF");
        setIframeSize(height);
        console.log("KSDFHK");
        createIframes(spotifyTracks, height);
    }

    const clickedArrow = (direction, index) => {
        console.log(direction);

        if(direction === "up"){
            let toModify = spotifyTracksIframe.slice();
            const a = toModify[index];
            const b = toModify[index - 1];
            toModify[index - 1] = a;
            toModify[index] = b;
            setSpotifyTracksIframe(toModify);
        }

        if(direction === "down"){
            let toModify = spotifyTracksIframe.slice();
            const a = toModify[index];
            const b = toModify[index + 1];
            toModify[index + 1] = a;
            toModify[index] = b;
            setSpotifyTracksIframe(toModify);
        }
    }

    const changeDir = (newDir) => {
        console.log("JGSKDGSD");
        if(newDir === "lr"){
            setSpotifyTracksDir(false);
        }
        if(newDir === "tb"){
            setSpotifyTracksDir(true);
        }
    }

    return (
        <div>
            <div className="Settings">
                <input type="radio" name="direction" id="SpotifySettingsDir" onChange={()=>changeDir("lr")} checked={spotifyTracksDir ? "" : "checked"}/> Left to Right <br/>
                <input type="radio" name="direction" id="SpotifySettingsDir" onChange={()=>changeDir("tb")}/> Top to bottom <br/>
            
                <input type="radio" name="size" id="SpotifySettingsSize" onChange={()=>sortIframes("80")}/> 80px <br/>
                <input type="radio" name="size" id="SpotifySettingsSize" onChange={()=>sortIframes("380")}/> 380px <br/>
            </div>
            <div className={spotifyTracksDir ? "SpotifySongsTB" : "SpotifySongsRL"}>
                {sortedSpotifyTracks && sortedSpotifyTracks.map((item,index)=>{
                    return(
                        <div className={spotifyTracksDir ? "SpotifySongTB" : "SpotifySongRL"} key={index}>
                        <h1>{index + 1}</h1>
                        {spotifyTracksIframe && spotifyTracksIframe[index].frame}
                        <SpotifyGuessPointScore index={index} clicked={clickedArrow} dir={spotifyTracksDir}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SpotifyGuessMain
