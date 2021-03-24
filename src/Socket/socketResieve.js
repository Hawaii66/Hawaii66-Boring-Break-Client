export function ShowGames(data, setShowGame) {
    if (data === 0) { //1truth 2 lies
        const toSend = {
            id: 0,
            bool: true
        }
        setShowGame(toSend);
    }
    if (data === 1) { //Love O Meter
        const toSend = {
            id: 1,
            bool: true
        }
        setShowGame(toSend);
    }
    if (data === 2) { //Speed Math
        const toSend = {
            id: 2,
            bool: true
        }
        setShowGame(toSend);
    }
}