import socketIOClient from "socket.io-client";

//export var socket = socketIOClient.io.connect("https://server-question-game.herokuapp.com/");
export var socket = socketIOClient.io.connect("http://localhost:5000/");
console.log(socket);

export function JoinServer(data, callback) {
    console.log(data);
    socket.emit("joinServer", data, (data) => {
        console.log(data);
        callback(data);
    });
}

export function CreateServer(serverPin) {
    console.log("Create New Server");
    const pin = "1234";
    socket.emit("createServer", pin, (data) => {
        if (data.succes) {
            console.log(data.pin);
            serverPin(data.pin);
            console.log("Succesfully Created Server");
        } else {
            console.log("Error with creating a server");
        }
    });
}

export function ShowGameWindow(data, callback) {
    console.log(data);
    socket.emit("showGame", data, (data) => {
        console.log(data);
        callback(data);
    });
}

export function DoneWith2T1LChoise(data, callback) {
    console.log(data);
    socket.emit("HasEntered2T1LChoise", data, (data) => {
        console.log("Answer submited");
    });
}

export function GameSpeedMathStartGame(difficulty) {
    console.log(difficulty);
    socket.emit("GameSpeedMathStartGame", difficulty);
}

export function GameIsAdmin(callback) {
    socket.emit("IsAdmin", (data) => {
        callback(data);
    });
}

export function GameSpeedMathSubmitAnswer(data) {
    socket.emit("GameSpeedMathSubmitAnswer", (data));
}