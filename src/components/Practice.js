import {  useState, useRef } from "react"
const Practice = () => {
    const [msec, setMsec] = useState(0)
    const [sec, setSec] = useState(0)
    const [min, setMin] = useState(0)

    const timerId = useRef(null);

    function start() {
        timerId.current = setInterval(() => {
            setMsec(val => val+1)
        }, 10)
    }
    function stop() {
        clearInterval(timerId.current)
    }
    function reset() {
        setMsec(0);
        setSec(0)
        setMin(0)
    }
    if (msec === 100) {
        setSec(val => val+1)
        setMsec(0);
    }
    if (sec === 60) {
        setMin(val => val+1);
        setSec(0)
    }
    return (
        <div>
           <div>{min} : {sec} : {msec}</div>
           <button onClick={start}>Start</button>
           <button onClick={stop}>Stop</button>
           <button onClick={reset}>Reset</button>

        </div>
    )
}
export default Practice