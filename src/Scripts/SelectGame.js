import { ShowGameWindow } from "../Socket/socketEmit.js";

export function ChooseGame(index) {
    console.log("EST");
    console.log(index);
    console.log("WHATWTAWT");
    let currentGameIndex = -1;
    if (index === 0) {
        currentGameIndex = index;
        const toSend = {
            gameIndex: currentGameIndex
        }
        console.log("TEST");
        ShowGameWindow(toSend, (data) => {
            console.log("TES");
        });
    }
    if (index === 1 || index === 2 || index === 3) {
        currentGameIndex = index;
        const toSend = {
            gameIndex: currentGameIndex
        }
        console.log("TEST");
        ShowGameWindow(toSend, (data) => {
            console.log("TES");
        });
    }
}