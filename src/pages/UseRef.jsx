import React, { useRef, useState, useEffect} from "react";

export default function UseRef() {
    const [count, setCount] = useState(60)

    let timerId 

    const handleStart = () => {
        timerId = setInterval(() => {
            setCount(prevCount => prevCount-1)
        },1000);

        console.log("start => ", timerId);     
    }

    const handleStop = () => {
        clearInterval(timerId);

        console.log("stop", timerId);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleStart}></button>
            <button onClick={handleStop}></button>
        </div>
    )
}