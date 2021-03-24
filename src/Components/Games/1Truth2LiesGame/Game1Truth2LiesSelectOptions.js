import React from 'react'

import { DoneWith2T1LChoise } from "../../../Socket/socketEmit.js";

import "./Game1Truth2LiesSelectOptions.css";

function Game1Truth2LiesSelectOptions({ hideOptions }) {
    const SendOptionsToServer = event => {
        event.preventDefault();
        console.log(event.target);
        const formData = new FormData(event.target);
        const t = formData.get("1Truth2LiesSelectOptionT1");
        const l1 = formData.get("1Truth2LiesSelectOptionL1");
        const l2 = formData.get("1Truth2LiesSelectOptionL2");
        const toSend = {
            t,
            l1,
            l2
        }
        console.log(toSend);
        hideOptions(1);
        DoneWith2T1LChoise(toSend, () => {
            console.log("success");
        })
    }

    return (
        <div className="Game1Truth2LiesSelectOptions" >
            <form onSubmit={SendOptionsToServer} >
                <h1 > Truth </h1>
                <textarea type="text"
                    name="1Truth2LiesSelectOptionT1"
                    id="1Truth2LiesSelectOptionT1" />
                <h1 > Lie </h1>
                <textarea type="text"
                    name="1Truth2LiesSelectOptionL1"
                    id="1Truth2LiesSelectOptionL1" />
                <h1 > Lie </h1>
                <textarea type="text"
                    name="1Truth2LiesSelectOptionL2"
                    id="1Truth2LiesSelectOptionL2" />
                <button > Enter Game </button>
            </form>
        </div>
    )
}

export default Game1Truth2LiesSelectOptions