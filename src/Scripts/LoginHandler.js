import { JoinServer, CreateServer } from "../Socket/socketEmit.js";

export function handleShowLogin(LoginName, LoginPin, callback) {
    if (LoginName.toString() === "" || LoginPin.toString() === "0") {
        return;
    }
    console.log(LoginName);
    console.log(LoginPin);
    const toSend = {
        pin: LoginPin,
        name: LoginName
    }
    JoinServer(toSend, (data) => {
        console.log(data);
        //setShowLogin(false);
        callback(false);
    });
}

export function handleCreateServer(pin) {
    console.log("TEST");
    CreateServer(pin);
}