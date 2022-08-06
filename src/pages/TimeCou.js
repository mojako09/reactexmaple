import React, { useState} from 'react'


const TimerCou = () => {

    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }
    return (
    <div>
            <div>Button Has been clicked: {count} times</div>
            <button onClick={increment}>Click Me</button>
    </div>)
  };
  
  export default TimerCou;