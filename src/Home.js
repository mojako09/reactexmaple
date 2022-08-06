import React, { useState} from 'react'

const Home = () => {
        const showAlert = () => {
          alert("Clicked!");
        }
        const showButton1 = () => {
            alert("You Click Button 1");
        }
        const showButton2 = () => {
            alert("You Click Button 2");
        }  
        const showButton3 = () => {
            alert("You Click Button 3");
        }  
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }

    /*const numbers = ["dog", "cat", "chicken", "cow", "horse"];*/
    return (
        <div>
            <div>
                <button onClick={showAlert}>Click Me</button>
            </div>
            <div>
                <button onClick={showButton1}>Button 1</button>
                <button onClick={showButton2}>Button 2</button>
                <button onClick={showButton3}>Button 3</button>
            </div>
            <div>Button Has been clicked: {count} times</div>
            <button onClick={increment}>Click Me</button>


        </div>
    )
}
export default Home