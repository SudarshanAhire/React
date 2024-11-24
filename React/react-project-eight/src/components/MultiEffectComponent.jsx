import React, {useState, useEffect } from 'react';

function MultiEffectComponent() {
    const [count, setCount] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        console.log('Count changed:', count);
    },[count]);
    // side-effect logic will run only when count is changed

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log("setInterval Started");
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => {
            console.log("time to stop");
            clearInterval(intervalId);}
    }, []);
    // it will run only on first render

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <h2>seconds.{seconds}</h2>
        </div>
    );
}
export default MultiEffectComponent