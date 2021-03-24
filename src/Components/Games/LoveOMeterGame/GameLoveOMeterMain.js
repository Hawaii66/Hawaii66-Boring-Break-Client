import React, { useState } from 'react';
import * as seed from 'seed-random'

import "./GameLoveOMeterMain.css";
import RadialChart from "../../../Components/Downloaded/CircleChart.js";
import preMade from "./GameLoveOMeterPremade.js";

function GameLoveOMeterMain() {
    const [LoveValue, setLoveValue] = useState(0);
    const [Name1, setName1] = useState("");
    const [Name2, setName2] = useState("");
    const [circleColor, setCircleColor] = useState();
    const [usePercent, setUsePercent] = useState(true);

    const CalculateOnClick = e => {
        e.preventDefault();

        if (Name1 === "" || Name2 === "") {
            setLoveValue(0);
            return;
        }

        let ExistsInPreMade = false;
        let preMadeValue = 0;
        for (let i = 0; i < preMade.length; i++) {
            const element = preMade[i];
            if (element.name1.toString() === Name1.toString()) {
                if (element.name2.toString() === Name2.toString()) {
                    ExistsInPreMade = true;
                    preMadeValue = element.value;
                    break;
                }
            } if (element.name1.toString() === Name2.toString()) {
                if (element.name2.toString() === Name1.toString()) {
                    ExistsInPreMade = true;
                    preMadeValue = element.value;
                    break;
                }
            }
        }

        if (!ExistsInPreMade) {
            const Names = Name1.toString() + Name2.toString();
            const randomWithSeed = seed(Names.toString());
            let randomDecimalWithSeed = randomWithSeed();
            randomDecimalWithSeed = Math.floor(randomDecimalWithSeed * 101);
            setLoveValue(randomDecimalWithSeed);

            if (randomDecimalWithSeed < 11) {
                setCircleColor("#2c3e50");
            } else if (randomDecimalWithSeed < 21) {
                setCircleColor("#f1c40f");
            } else if (randomDecimalWithSeed < 51) {
                setCircleColor("#2ecc71");
            } else if (randomDecimalWithSeed < 76) {
                setCircleColor("#8e44ad");
            } else {
                setCircleColor("#e74c3c");
            }
        } else {
            setLoveValue(preMadeValue);
            if (preMadeValue < 11) {
                setCircleColor("#2c3e50");
            } else if (preMadeValue < 21) {
                setCircleColor("#f1c40f");
            } else if (preMadeValue < 51) {
                setCircleColor("#2ecc71");
            } else if (preMadeValue < 76) {
                setCircleColor("#8e44ad");
            } else {
                setCircleColor("#e74c3c");
            }
        }

        if (typeof preMadeValue === "string" || preMadeValue instanceof String) {
            setUsePercent(false);
        } else {
            setUsePercent(true);
        }
    }

    const onChangeName1 = event => {
        setName1(event.target.value);
    }
    const onChangeName2 = event => {
        setName2(event.target.value);
    }

    return (
        <div className="GameLOM">
            <div className="CircleChart">
                <RadialChart
                    progress={LoveValue}
                    color={circleColor}
                />
            </div>
            <h1>{LoveValue}{usePercent ? "%" : null}</h1>
            <form id="GameLOMForm" onSubmit={CalculateOnClick}>
                <input type="text" placeholder="Name 1" onChange={onChangeName1} />
                <input type="text" placeholder="Name 2" onChange={onChangeName2} />
                <button >Calculate</button>
            </form>
            <div className="HomeButton">
                <button onClick={() => { window.open("http://localhost:3000/", "_self") }}>HOME</button>
            </div>
        </div>

    )
}

export default GameLoveOMeterMain
