
const BtnThree = () => {

    const showButton1 = () => {
        alert("You Click Button 1");
    }
    const showButton2 = () => {
        alert("You Click Button 2");
    }  
    const showButton3 = () => {
        alert("You Click Button 3");
    }  
    return (
        <div>
            <button onClick={showButton1}>Button 1</button>
            <button onClick={showButton2}>Button 2</button>
            <button onClick={showButton3}>Button 3</button>
        </div>
    )
  };
  
  export default BtnThree;

