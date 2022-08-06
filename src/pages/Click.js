const Click = () => {
    const showAlert = () => {
        alert("Clicked!");
      }
    return (
    <div>
        <button onClick={showAlert}>Click Me</button>
    </div>
    );
  };
  
  export default Click;